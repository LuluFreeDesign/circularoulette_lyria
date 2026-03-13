import { useState, useEffect } from "react";
import { Wheel } from "./components/Wheel";
import { Quiz } from "./components/Quiz";
import { quizDataByCategory } from "./data/quizData";

// Catégories actives pour le quiz (exclure "et ça repart !" et "mystère !!")
const quizCategories = Object.keys(quizDataByCategory).filter(
  (cat) => cat !== "et ça repart !" && cat !== "mystère !!"
);

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [mysteryResolvedCategory, setMysteryResolvedCategory] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Auto-resize pour iframe : envoyer la hauteur au parent
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      // Envoyer la hauteur au parent si on est dans une iframe
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'iframe-resize',
            height: height
          },
          '*'
        );
      }
    };

    // Envoyer la hauteur initiale
    sendHeight();

    // Observer les changements de taille
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(document.body);

    // Envoyer aussi à chaque changement de contenu
    const interval = setInterval(sendHeight, 500);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, [currentCategory]);

  const handleCategorySelected = (category: string) => {
    // Cas spécial : "mystère !!" sélectionne une catégorie au hasard
    if (category === "mystère !!") {
      const randomIndex = Math.floor(Math.random() * quizCategories.length);
      const randomCategory = quizCategories[randomIndex];
      setMysteryResolvedCategory(randomCategory);
      setCurrentCategory("mystère !!");
      return;
    }

    setMysteryResolvedCategory(null);
    setCurrentCategory(category);
  };

  const handleQuizComplete = () => {
    setCurrentCategory(null);
    setMysteryResolvedCategory(null);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      {/* Contenu principal : roue ou quiz */}
      {!currentCategory ? (
        <Wheel 
          onCategorySelected={handleCategorySelected}
          isSpinning={isSpinning}
          setIsSpinning={setIsSpinning}
        />
      ) : (
        <Quiz 
          category={currentCategory === "mystère !!" ? mysteryResolvedCategory! : currentCategory}
          isMystery={currentCategory === "mystère !!"}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
}