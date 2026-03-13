import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { quizDataByCategory, Question } from "../data/quizData";

/**
 * Parse le texte d'explication pour convertir les liens markdown [texte](url)
 * en éléments <a> cliquables et les \n en <br />
 */
function renderExplanation(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      result.push(<br key={`br-${lineIndex}`} />);
    }

    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        result.push(line.slice(lastIndex, match.index));
      }
      result.push(
        <a
          key={`link-${lineIndex}-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#1592A8] hover:text-[#0A4D5A] transition-colors"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < line.length) {
      result.push(line.slice(lastIndex));
    }
  });

  return result;
}

/** Helpers pour gérer correctAnswer: number | number[] */
function getCorrectAnswers(correctAnswer: number | number[]): number[] {
  return Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
}

function isAnswerCorrect(index: number, correctAnswer: number | number[]): boolean {
  return getCorrectAnswers(correctAnswer).includes(index);
}

/** Mémorise la dernière question posée par catégorie pour éviter les doublons consécutifs */
const lastQuestionByCategory: Record<string, number> = {};

/** Index séquentiel pour les catégories qui affichent les questions dans l'ordre */
const sequentialIndexByCategory: Record<string, number> = {};

/** Catégories dont les questions doivent apparaître dans l'ordre du fichier */
const SEQUENTIAL_CATEGORIES = ["en train !!!"];

interface QuizProps {
  category: string;
  isMystery?: boolean;
  onComplete: () => void;
}

export function Quiz({ category, isMystery = false, onComplete }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  // Sélection pure (sans effet de bord) pour être compatible StrictMode
  const [currentQuestion] = useState<Question | null>(() => {
    const questions = quizDataByCategory[category] || [];
    if (questions.length === 0) return null;

    if (SEQUENTIAL_CATEGORIES.includes(category)) {
      const idx = sequentialIndexByCategory[category] ?? 0;
      return questions[idx % questions.length];
    }

    const lastId = lastQuestionByCategory[category];
    const pool = questions.length > 1
      ? questions.filter(q => q.id !== lastId)
      : questions;
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  });

  // Tracking en useEffect (exécuté une seule fois, même en StrictMode)
  useEffect(() => {
    if (!currentQuestion) return;
    if (SEQUENTIAL_CATEGORIES.includes(category)) {
      const questions = quizDataByCategory[category] || [];
      const currentIdx = questions.findIndex(q => q.id === currentQuestion.id);
      if (currentIdx !== -1) {
        sequentialIndexByCategory[category] = (currentIdx + 1) % questions.length;
      }
    } else {
      lastQuestionByCategory[category] = currentQuestion.id;
    }
  }, [category, currentQuestion]);
  
  if (!currentQuestion) {
    return <div>Aucune question disponible pour cette catégorie.</div>;
  }

  const isMultiAnswer = Array.isArray(currentQuestion.correctAnswer);
  const correctAnswers = getCorrectAnswers(currentQuestion.correctAnswer);
  const isDiscussionQuestion = currentQuestion.options.length === 0;

  // L'usager a trouvé au moins une bonne réponse parmi ses sélections
  const hasAtLeastOneCorrect = selectedAnswers.some(a => correctAnswers.includes(a));

  const handleAnswerClick = (index: number) => {
    if (showResult) return;

    if (isMultiAnswer) {
      // Mode multi-réponses : toggle la sélection
      setSelectedAnswers(prev =>
        prev.includes(index)
          ? prev.filter(a => a !== index)
          : [...prev, index]
      );
    } else {
      // Mode simple : remplace la sélection
      setSelectedAnswers([index]);
    }
  };

  const handleValidate = () => {
    if (selectedAnswers.length === 0) return;
    setShowResult(true);
  };

  const handleNext = () => {
    onComplete();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      {/* Catégorie */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {isMystery && (
            <span className="inline-block px-4 py-2 bg-[#8ECFDA] text-[#3A3A3A] rounded-full">
              Mystère !!
            </span>
          )}
          <span className={`inline-block px-4 py-2 rounded-full ${isMystery ? "bg-[#3A3A3A] text-white" : "bg-[#1592A8] text-white"}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl mb-3 text-[#3A3A3A]">
        {currentQuestion.question}
      </h2>

      {/* Indice */}
      {currentQuestion.hint && (() => {
        // Extraire l'URL depuis le hint (format markdown [texte](url) ou URL brute)
        const markdownMatch = currentQuestion.hint.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
        const bareUrlMatch = currentQuestion.hint.match(/(https?:\/\/[^\s)]+)/);
        const hintUrl = markdownMatch ? markdownMatch[2] : bareUrlMatch ? bareUrlMatch[1] : null;

        return (
          <div className="mb-5 p-4 bg-[#D4EEF2] border-l-4 border-[#1592A8] rounded-lg">
            <p className="text-[#3A3A3A] flex items-start gap-2">
              <span className="text-lg shrink-0" aria-hidden="true">💡</span>
              <span>
                <strong className="text-[#3A3A3A]">Indice</strong>
                <br />
                <span className="text-sm">
                  Pour en savoir plus,{" "}
                  {hintUrl ? (
                    <a
                      href={hintUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1592A8] underline hover:text-[#0A4D5A] transition-colors"
                    >
                      rendez-vous par ici !
                    </a>
                  ) : (
                    "rendez-vous par ici !"
                  )}
                </span>
              </span>
            </p>
          </div>
        );
      })()}

      {/* Indication multi-réponses */}
      {isMultiAnswer && !isDiscussionQuestion && (
        <p className="mb-5 text-sm text-[#0A4D5A] bg-[#8ECFDA]/30 border border-[#1592A8]/30 rounded-lg px-4 py-2 italic">
          Plusieurs réponses sont possibles. Trouvez-en au moins une !
        </p>
      )}

      {/* Options de réponse OU message de réflexion pour questions de discussion */}
      {isDiscussionQuestion ? (
        <div className="mb-6 p-6 bg-[#BDE3EB] border-2 border-[#1592A8] rounded-lg">
          <p className="text-[#3A3A3A] text-center font-medium text-lg">
            C'est une question de réflexion personnelle. Prenez un moment pour y penser...
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers.includes(index);
            const isCorrectOption = isAnswerCorrect(index, currentQuestion.correctAnswer);
            const showCorrect = showResult && isCorrectOption;
            const showIncorrect = showResult && isSelected && !isCorrectOption;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-4 focus:ring-[#1592A8] focus:ring-opacity-50 ${
                  showCorrect
                    ? "border-[#16A34A] bg-[#DCFCE7]"
                    : showIncorrect
                    ? "border-[#f2827f] bg-[#f8c1b8]"
                    : isSelected
                    ? "border-[#1592A8] bg-[#8ECFDA]"
                    : "border-gray-300 hover:border-[#1592A8] hover:bg-gray-50"
                } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                aria-pressed={isSelected}
                aria-label={`Option ${index + 1}: ${option}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg">{option}</span>
                  {showCorrect && <Check className="text-[#166534] shrink-0" aria-label="Bonne réponse" />}
                  {showIncorrect && <X className="text-[#651c32] shrink-0" aria-label="Mauvaise réponse" />}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Résultat et explication */}
      {showResult || isDiscussionQuestion ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-6"
        >
          <div className={`p-4 rounded-lg ${
            isDiscussionQuestion 
              ? "bg-[#BDE3EB] border-2 border-[#1592A8]"
              : hasAtLeastOneCorrect
                ? "bg-[#DCFCE7] border-2 border-[#16A34A]"
                : "bg-[#f8c1b8] border-2 border-[#f2827f]"
          }`}>
            {!isDiscussionQuestion && (
              <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${hasAtLeastOneCorrect ? "text-[#166534]" : "text-[#651c32]"}`}>
                {hasAtLeastOneCorrect ? (
                  <>
                    <Check aria-hidden="true" /> Bonne réponse !
                  </>
                ) : (
                  <>
                    <X aria-hidden="true" /> Mauvaise réponse
                  </>
                )}
              </h3>
            )}
            {isDiscussionQuestion && (
              <h3 className="font-bold text-lg mb-2 text-[#3A3A3A]">
                Piste de réflexion
              </h3>
            )}
            <p className="text-[#3A3A3A] leading-relaxed">
              {renderExplanation(currentQuestion.explanation)}
            </p>
            {currentQuestion.source === "SNCF" && (
              <p className="text-[#3A3A3A] text-sm italic mt-2">
                Source : SNCF voyageurs
              </p>
            )}
          </div>

          {/* Jeu concours - Affiché uniquement pour les bonnes réponses */}
          {!isDiscussionQuestion && hasAtLeastOneCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 p-5 rounded-lg bg-gradient-to-br from-[#BDE3EB]/30 to-[#BDE3EB]/30 border-2 border-[#1592A8]"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">🎁</span>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-[#1592A8] mb-2">
                    Bravo ! Tentez de gagner un Aller / Retour en TGV INOUI !
                  </h4>
                  <p className="text-[#3A3A3A] mb-4 leading-relaxed">
                    Une bonne réponse = une chance de gagner un Aller / Retour en TGV INOUI.
                    <br />
                    Pour participer au tirage au sort, il suffit de nous laisser votre email 💌.
                  </p>
                  <a
                    href="https://quefairedemesdechets.ademe.fr/jeu-concours-entrain-pour-le-climat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1592A8] text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-[#0A4D5A] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#1592A8] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                  >
                    <span>Participer au jeu concours</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <p className="text-xs text-[#0A4D5A] mt-3">
                    Le formulaire s'ouvrira dans un nouvel onglet
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      ) : null}

      {/* Boutons d'action */}
      <div className="flex gap-4">
        {!showResult && !isDiscussionQuestion ? (
          <button
            onClick={handleValidate}
            disabled={selectedAnswers.length === 0}
            className="flex-1 bg-[#1592A8] text-white py-3 px-6 rounded-lg transition-all hover:bg-[#0A4D5A] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#1592A8] focus:ring-opacity-50"
          >
            Valider ma réponse
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-[#1592A8] text-white py-3 px-6 rounded-lg transition-all hover:bg-[#0A4D5A] focus:outline-none focus:ring-4 focus:ring-[#1592A8] focus:ring-opacity-50"
          >
            Rejouer
          </button>
        )}
      </div>
    </motion.div>
  );
}