export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  hint?: string;
  explanation: string;
  source: string;
}

export const quizDataByCategory: Record<string, Question[]> = {
  "ça va où ?": [
    {
      id: 1,
      question: "J'apporte mes piles usagées dans un point de collecte. Que va-t-il leur arriver ?",
      options: [
        "A) Elles seront enfouies ensemble",
        "B) Elles seront brûlées dans une usine de traitement",
        "C) Les métaux et composants seront séparés et recyclés",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/pile-jetable/?utm_campaign=circularoulette_enligne)",
      explanation: "Déposer ces objets en fin de vie dans un point de collecte, c'est leur permettre une seconde vie ! Les métaux contenus dans les piles et accumulateurs portables sont collectés, triés, broyés pour séparer les composants (acier, blackmass) et fabriquer de nouvelles piles ou divers objets de notre quotidien (couverts en acier, clefs, canettes, gouttières, etc.). \nPour trouver des points de collecte de piles autour de chez vous, c'est [par ici](https://quefairedemesdechets.ademe.fr/dechet/pile-jetable/?utm_campaign=circularoulette_enligne) ! \nUne alternative : les piles rechargeables.",
      source: "Piles"
    },
    {
      id: 2,
      question: "Les épluchures doivent-elles se jeter dans la poubelle des ordures ménagères ?",
      options: [
        "A) Oui",
        "B) Non",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne)",
      explanation: "Depuis 2024 toutes les communes doivent proposer un système de valorisation des biodéchets organiques. Ils doivent être triés séparément (compost, lombricompost, bac collectif, etc.) pour être valorisés afin de nourrir les sols (remplacement des engrais chimiques).\nPour trouver où déposer vos déchets alimentaires le plus proche de chez vous, cliquez juste ici et renseignez votre adresse dans la [carte interactive](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne) !",
      source: "Alimentation"
    },
    {
      id: 3,
      question: "Si les vêtements sont jetés dans la poubelle de tri des emballages, que va-t-il leur arriver ?",
      options: [
        "A) Ils entraineront un refus du bac et toute la poubelle sera enfouie ou incinérée",
        "B) Ils seront triés pour rejoindre la filière de recyclage des textiles",
        "C) Ils seront déposés en zone de réemploi",
      ],
      correctAnswer: 0,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/vetements/?utm_campaign=circularoulette_enligne)",
      explanation: "Pour qu'ils aient une seconde vie, les vêtements doivent obligatoirement être déposés dans un des points de collecte dédié (borne dans l'espace public, en magasin, dans une association). S'ils sont déposés dans la poubelle ménagère : si le bac est refusé (lors de la collecte), il reste sur le trottoir. En revanche, s'il est emmené et mélangé au reste des emballages, il peut entrainer le refus de la benne entière. Sur la chaîne, il peut entrainer le refus d'emballages et sera envoyé à l'incinérateur.\nPour trouver où déposer vos vêtements le plus proche de chez vous, cliquez juste ici et renseignez votre adresse dans la [carte interactive](https://quefairedemesdechets.ademe.fr/dechet/vetements/?utm_campaign=circularoulette_enligne) !",
      source: "Vetements"
    },
    {
      id: 4,
      question: "Faut-il écraser ou aplatir les canettes et les bouteilles avant de les jeter dans la poubelle de tri ?",
      options: [
        "A) Oui, en boule",
        "B) Possible, mais que dans le sens de la longueur",
        "C) Non, ça perturbe les chaines de tri",
      ],
      correctAnswer: [1, 2],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesobjets.ademe.fr/dechet/canette/?utm_campaign=circularoulette_enligne)",
      explanation: "De préférence non, mais si c'est nécessaire, les écraser dans le sens de la longueur. Au risque qu'elles ne soient pas recyclées, il est conseillé de ne pas les écraser ni les aplatir lors du tri (tout comme les bouteilles). Les canettes en acier, en aluminium, et les capsules métalliques sont récupérées séparément dans les centres de tri et regroupées en balles (paquets) en vue de leur recyclage. L'acier et l'aluminium sont ensuite lavés, broyés et fondus pour être réintégrés à la chaîne de production et fabriquer de nouveaux produits. En cas de doute, consultez la consigne sur [Que faire de mes déchets](https://quefairedemesobjets.ademe.fr/dechet/canette/?utm_campaign=circularoulette_enligne) !",
      source: "Emballages"
    },
    {
      id: 8,
      question: "Il me reste des médicaments de mon ancien traitement mais ils sont périmés. Que faire ?",
      options: [
        "A) Je rends les boîtes qui contiennent encore des médicaments à la pharmacie",
        "B) Je les jette dans la poubelle",
        "C) Je les dépose en pharmacie après avoir mis la boîte et la notice au tri",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesobjets.ademe.fr/dechet/medicaments/?utm_campaign=circularoulette_enligne)",
      explanation: "Pour trouver la pharmacie la plus proche de chez vous pour déposer vos médicaments, rendez-vous sur la page \"Médicaments\" de [Que faire de mes objets](https://quefairedemesobjets.ademe.fr/dechet/medicaments/?utm_campaign=circularoulette_enligne)",
      source: "Médicaments"
    },
    {
      id: 13,
      question: "Que faire de mes restes de repas y compris les os de viande et les croûtes de fromage ?",
      options: [
        "A) Les jeter dans la nature, c'est biodégradable !",
        "B) Les déposer dans le bac pour biodéchets ou dans le sac fourni par la collectivité",
        "C) Les mettre dans mon lombricomposteur",
        "D) Les déposer dans votre compost au jardin",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne)",
      explanation: "Les restes de repas peuvent être en très grande majorité valorisés, ce sont des biodéchets. On peut les déposer au point de collecte du quartier (ou sac dédié), ils seront envoyés vers une filière de compostage industriel. \nPour trouver où déposer vos déchets alimentaires le plus proche de chez vous, cliquez juste ici et renseignez votre adresse dans la [carte interactive](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne) ! \nÀ la maison, les restes alimentaires peuvent être mis dans le composteur/lombricomposteur, à quelques exceptions près. Les os, les croûtes de fromage par exemple sont à éviter. Pas d'agrumes, ni d'épluchures d'oignons et de poireaux en lombricompost.",
      source: "Alimentation"
    },
    {
      id: 14,
      question: "Les épluchures de fruits et noyaux peuvent être jetés dans la nature ?",
      options: [
        "A) Oui, car ils sont biodégradables",
        "B) Oui, car ils nourrissent les petits insectes",
        "C) Non, car cela peut déstabiliser l'écosystème",
        "D) Oui, ça enrichit la terre",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne)",
      explanation: "Dans la nature, les êtres vivants sont en équilibre, ils constituent un écosystème. Un écosystème, c'est l'ensemble des organismes (plantes, insectes, animaux, champignons, etc) qui interagissent entre eux au sein d'un même milieu. En cas de dépôt d'éléments extérieurs, même s'ils paraissent inoffensifs (comme des biodéchets) ils peuvent déstabiliser le fragile équilibre du milieu. La décomposition des aliments est moins rapide que nous ne pouvons l'imaginer. Les animaux ne se nourrissent pas des mêmes aliments que les êtres humains. \nPour trouver où déposer vos déchets alimentaires le plus proche de votre lieu de balade, cliquez juste ici et renseignez votre adresse dans la [carte interactive](https://quefairedemesdechets.ademe.fr/categories/biodechets/dechets-alimentaires/?utm_campaign=circularoulette_enligne) !",
      source: "Alimentation"
    },
    {
      id: 7,
      question: "Quand je dépose mes emballages dans la poubelle de tri...",
      options: [
        "A) Je les emboite pour qu'ils prennent moins de place",
        "B) Je les jette dans un sac pour les regrouper",
        "C) Je les lave s'ils sont sales",
        "D) Je ne les emboite pas et les laisse tels quels",
      ],
      correctAnswer: [1, 3],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/boite-en-plastique-alimentaire-emballage/?utm_campaign=circularoulette_enligne)",
      explanation: "Il n'y a pas besoin d'emboîter, ni de tasser, ni de laver. En général il faut les déposer tels quels dans le bac, mais dans certaines collectivités il faut les mettre dans un sac (jaune translucide en général). En cas de doute sur la marche à suivre, RDV sur [Que faire de mes déchets](https://quefairedemesdechets.ademe.fr/dechet/boite-en-plastique-alimentaire-emballage/?utm_campaign=circularoulette_enligne) !",
      source: "Emballages"
    }
  ],

  "j'agis !!": [
    {
      id: 28,
      question: "Nouvelle ordonnance de l'ophtalmo : il faut changer de lunettes. Que faire ?",
      options: [
        "A) Garder son ancienne paire au cas où, et acheter une nouvelle paire à sa vue",
        "B) Déposer son ancienne paire dans une boite de collecte et acheter une nouvelle paire",
        "C) Commander de nouveaux verres à sa vue et les faire monter sur ses anciennes lunettes",
        "D) Trouver un opticien qui permet d'acheter 4 paires pour le prix d'une",
      ],
      correctAnswer: [1, 2],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesobjets.ademe.fr/dechet/lunettes/?utm_campaign=circularoulette_enligne)",
      explanation: "L'option la plus écologique est de monter de nouveaux verres sur votre monture actuelle.  \nSi la monture doit vraiment être changée, il est possible de déposer sa paire de lunettes dans une borne de collecte pour lui donner une seconde vie. \nTrouvez celle la plus proche de chez vous en renseignant votre adresse sur la [carte interactive](https://quefairedemesobjets.ademe.fr/dechet/lunettes/?utm_campaign=circularoulette_enligne) !",
      source: "Lunettes"
    },
    {
      id: 29,
      question: "Vous vous cassez le poignet et utilisez une attelle quelques semaines. Une fois rétabli·e, que devriez-vous en faire ?",
      options: [
        "A) La garder dans le placard au cas où vous vous cassiez à nouveau le poignet",
        "B) La déposer dans la poubelle de tri, elle sera recyclée dans une filière adaptée",
        "C) La jeter à la poubelle, il n'existe pas de filière de recyclage pour les attelles",
        "D) La déposer dans un point de collecte dédié, la donner ou la vendre",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/attelle/?utm_campaign=circularoulette_enligne)",
      explanation: "Dans la poubelle jaune, elle ne sera jamais recyclée et finira à l'incinération.\nL'idéal est de la donner pour servir à quelqu'un d'autre. Les points de collecte spécialisés se trouvent en pharmacie ou dans les hôpitaux, retrouvez le plus proche de chez vous sur la [carte interactive](https://quefairedemesdechets.ademe.fr/dechet/attelle/?utm_campaign=circularoulette_enligne)",
      source: "Aide technique"
    },
    {
      id: 30,
      question: "Vous avez une peluche en bon état dont votre enfant ne veut plus. Quelle est la meilleure solution pour vous en séparer sans gaspiller ?",
      options: [
        "A) La jeter dans la poubelle de tri",
        "B) La laver et la donner à une ressourcerie",
        "C) La couper en morceaux pour en faire des éponges",
        "D) La déposer en évidence sur un banc dans la rue pour que quelqu'un la prenne",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/peluche/?utm_campaign=circularoulette_enligne)",
      explanation: "Si elle est en bon état, vous pouvez la donner ou la vendre pour qu'elle poursuive sa vie dans les bras d'autres enfants (entourage, associations, ressourceries, vente sur une plateforme de seconde main, etc.)\nEn mauvais état : vous pouvez la réparer ou la déposer dans un des points de collecte pour recyclage. \nTrouvez les associations locales ou des points de collecte pour recyclage proches de chez vous en renseignant votre adresse sur la [carte interactive](https://quefairedemesdechets.ademe.fr/dechet/peluche/?utm_campaign=circularoulette_enligne) !",
      source: "Jouet"
    },
    {
      id: 32,
      question: "Mon manteau est déchiré au niveau de la doublure, que faire ?",
      options: [
        "A) Je le recouds",
        "B) Je cherche un.e couturier.ière et profite du \"Bonus Réparation\"",
        "C) Je le jette et j'en rachète un nouveau plus à la mode",
        "D) Je le dépose dans un point de collecte de vêtements et j'en recherche un d'occasion",
      ],
      correctAnswer: [0, 1],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "Recoudre ou faire recoudre permettrait de prolonger la vie du manteau et d'éviter un déchet textile supplémentaire, surtout s'il est encore en bon état. Le bonus réparation pour réparer une doublure est compris entre 10€ et 25€ ! Découvrez les réparateurs agréés qui peuvent vous faire bénéficier du bonus sur la [carte interactive](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne), ou bien trouvez la retoucherie la plus proche de chez vous [ici](https://quefairedemesdechets.ademe.fr/dechet/vetements/?utm_campaign=circularoulette_enligne)",
      source: "Vetement"
    },
    {
      id: 36,
      question: "Combien de Français.es ont acheté un objet d'occasion dans les 12 derniers mois ? Et vous ?",
      options: [
        "A) 1 sur 4",
        "B) 2 sur 4",
        "C) 3 sur 4",
        "D) 99%",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/les-cartes-de-france-de-l%C3%A9conomie-circulaire/seconde-main/?utm_campaign=circularoulette_enligne)",
      explanation: "Vous faites partie de cette proportion ? Pensiez-vous qu'autant de personnes achetaient d'occasion ?\nPour trouver les boutiques les plus proches de chez vous, RDV sur la [carte de la seconde main](https://quefairedemesdechets.ademe.fr/les-cartes-de-france-de-l%C3%A9conomie-circulaire/seconde-main/?utm_campaign=circularoulette_enligne).",
      source: "Seconde main"
    },
    {
      id: 39,
      question: "Vous changez de chaise de bureau. Quelle est la meilleure option pour lui donner une seconde vie ?",
      options: [
        "A) La jeter avec les encombrants",
        "B) La déposer dans le bac du \"tout venant\" à la déchetterie",
        "C) La vendre ou la donner à une association",
        "D) La démonter et trier les matériaux un par un",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/categories/meubles/?utm_campaign=circularoulette_enligne)",
      explanation: "La donner à son entourage, ses voisins, à une association ou la mettre en vente. Trouvez les associations locales ou des points de collecte pour recyclage proches de chez vous en renseignant votre adresse sur la [carte interactive](https://quefairedemesdechets.ademe.fr/categories/meubles/?utm_campaign=circularoulette_enligne) !",
      source: "PGC"
    },
    {
      id: 27,
      question: "S'il est cassé, quel est le meilleur geste pour prolonger la durée de vie d'un objet ?",
      options: [
        "A) Le jeter en le triant dans la bonne filière pour qu'il soit recyclé",
        "B) Le donner à une association",
        "C) Le revendre même s'il est cassé",
        "D) Le réparer pour en prolonger l'usage",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://www.zerowastefrance.org/hierarchie-modes-traitement-dechets-juridictions-jurisprudence-application/)",
      explanation: "Il existe une \"hiérarchie des modes de traitement des déchets\" qui nous permet de savoir quelle est la meilleure \"deuxième vie\"  pour un objet et lui éviter au maximum de passer par la case déchet ! Avant qu'il ne devienne un déchet on peut réparer l'objet soi-même, chez un réparateur agréé, ou dans un repair café. En cas de doute, le site [Que faire de mes objets & déchets](https://quefairedemesdechets.ademe.fr/?utm_campaign=circularoulette_enligne) est un bon réflexe à prendre.",
      source: "ADEME"
    },
    {
      id: 33,
      question: "Vous ne voulez plus de votre canapé, mais il est encore confortable. Quelle est la meilleure solution pour vous en débarrasser sans gaspiller ?",
      options: [
        "A) Le mettre devant chez vous avec un mot",
        "B) Le proposer à une ressourcerie ou sur un site de don",
        "C) L'amener en déchetterie",
        "D) Le démonter pour récupérer la mousse",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/categories/meubles/canape/?utm_campaign=circularoulette_enligne)",
      explanation: "Le proposer à son entourage, à son voisinage, à une ressourcerie, ou sur un site de dons. Sinon vous pouvez l'emmener en déchetterie. Trouvez les solutions autour de chez vous [par ici](https://quefairedemesdechets.ademe.fr/categories/meubles/canape/?utm_campaign=circularoulette_enligne)",
      source: "PGC"
    }
  ],

  "challenge !!!": [
    {
      id: 40,
      question: "Combien y a-t-il de Repair'Café en France ?",
      options: [
        "A) Une petite dizaine",
        "B) Dans les 50",
        "C) Plus de 350",
        "D) Bientôt 2 500 !",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://www.repaircafe.org/fr/)",
      explanation: "350 en France et 3600 dans le monde (sans compter ceux non affiliés). Si vous aimez réparer et transmettre, vous pouvez vous aussi être accompagné pour monter un Repair'café associatif. Quand vous cherchez des points de réparation de petit électroménager sur le site [Que faire de mes objets et déchets](https://quefairedemesdechets.ademe.fr/categories/petit-electromenager/?utm_campaign=circularoulette_enligne), les repair cafés sont systématiquement affichés !",
      source: "Réparation"
    },
    {
      id: 100,
      question: "Combien y a-t-il de boîtes à livres en France ?",
      options: [
        "A) 100 000",
        "B) 16 000",
        "C) 4 000",
        "D) 850",
      ],
      correctAnswer: 1,
      hint: "rendez-vous par ici ! [par ici](https://www.boites-a-livres.fr/)",
      explanation: "Il y a plus de 16 000 boîtes de partage de livres en France. La majorité a été installée par l'association Recyclivre, et leur projet [Boite-à-Lire](https://www.boite-a-lire.com/). Pour faciliter le don de livres, Recyclivre nous a partagé leur liste qui peut se retrouver sur la page Livres de [Que faire de mes objets et déchets](https://quefairedemesdechets.ademe.fr/categories/livres/?utm_campaign=circularoulette_enligne), aux côtés des ressourceries généralistes et autres librairies d'occasion. Bonnes lectures !",
      source: "ADEME"
    },
    {
      id: 101,
      question: "Combien de litres d'eau peut polluer un mégot jeté au sol ?",
      options: [
        "A) 10 litres",
        "B) 50 litres",
        "C) 100 litres",
        "D) 500 litres",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/dechet/megot-de-cigarette/?utm_campaign=circularoulette_enligne)",
      explanation: "Un mégot peut polluer jusqu'à 500 litres d'eau, et mettre jusqu'à 10 ans à se décomposer. Pour le jeter, pas besoin d'attendre une poubelle dédiée, il suffit de l'éteindre et de le mettre à la poubelle grise des ordures ménagères. Plus d'infos [par ici](https://monmegotouilfaut.fr/)",
      source: "ADEME"
    },
    {
      id: 102,
      question: "Quelle proportion de Français avouent avoir déjà jeté un déchet dans la rue (laissé sur le trottoir, pas dans une poubelle) ?",
      options: [
        "A) 5%",
        "B) 16%",
        "C) 35%",
        "D) 52%",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://www.gestespropres.com/article/56-les-francais-et-les-dechets-abandonnes)",
      explanation: "Un objet que vous déposez sur un banc, même si vous espérez qu'il soit récupéré, est considéré comme un déchet sauvage et passible de 135 euros d'amende ! Pour trouver le bon endroit pour vous en défaire, un réflexe simple : le site [Que faire de mes objets & déchets](https://quefairedemesdechets.ademe.fr/?utm_campaign=circularoulette_enligne).",
      source: "ADEME"
    }
  ],

  "bon plan": [
    {
      id: 56,
      question: "J'organise une soirée \"troc de vêtements\" avec mes amis pour s'échanger les pièces que l'on ne porte plus, il s'agit de ....",
      options: [
        "A) Recyclage",
        "B) Réemploi",
        "C) Réparation",
        "D) Upcycling",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://observatoire-reemploi-reutilisation.ademe.fr/comprendre-le-reemploi)",
      explanation: "Recyclage : récupération des matières qui composent l'objet (cela nécessite de l'énergie et de l'eau)\nRéemploi : c'est quand l'objet garde son usage et change de propriétaire\nRéparation : c'est quand l'objet est conservé par son propriétaire et réparé pour le rendre à nouveau fonctionnel \nUpcycling : une forme de recyclage ou de réutilisation qui ajoute de la valeur à l'objet et parfois le change d'usage (ex : salon de jardin en palettes) \nSi vous ne faites pas la même taille de vêtements que vos amis, vous pouvez retrouver les boutiques de seconde main autour de chez vous [ici](https://quefairedemesobjets.ademe.fr/seconde-main/?utm_campaign=circularoulette_enligne)",
      source: "Textile"
    },
    {
      id: 57,
      question: "Prolonger d'un an la durée d'usage de ses équipements (TV, lave-linge, ...) plutôt que de les remplacer permettrait d'économiser ... ?",
      options: [
        "A) 120€",
        "B) 275€",
        "C) 420€",
        "D) 660€",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://infos.ademe.fr/magazine-mai-2022/faits-et-chiffres/equipements-domestiques-comment-prolonger-leur-duree-de-vie/)",
      explanation: "Prolonger d'un an la durée d'usage de ses équipements plutôt que de les remplacer par du neuf permettrait d'économiser 660 € par an. Pour trouver comment prolonger la vie de ses équipements, rdv [ici](https://quefairedemesobjets.ademe.fr/?utm_campaign=circularoulette_enligne)",
      source: "Numérique"
    },
    {
      id: 60,
      question: "Tout le monde peut-il bénéficier du Bonus Réparation ?",
      options: [
        "A) Non, il est seulement pour les moins de 26 ans",
        "B) Oui, sur justificatif d'inscription à France Travail",
        "C) Oui, tout le monde peut en bénéficier",
        "D) C'est une aide qui n'est jamais entrée en vigueur",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici !  [par ici](https://www.bonusreparation.org/)",
      explanation: "Depuis 2023, TOUT le monde peut bénéficier du Bonus Réparation ! Il s'agit d'un montant déduit directement de votre facture (votre produit doit avoir été réparé chez un réparateur labellisé). Pour en savoir plus et découvrir chez qui vous rendre, rdv [ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      source: "Réparation"
    },
    {
      id: 61,
      question: "Quel est le montant du bonus réparation pour réparer la semelle d'une paire de chaussures ?",
      options: [
        "A) 2€",
        "B) 5€",
        "C) 12€",
        "D) 18€",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "Le bonus réparation permet d'avoir 18€ remboursés pour un ressemelage de la gomme, ou 25€ pour le ressemelage du cuir.  \nPour en savoir plus et découvrir chez qui vous rendre pour en bénéficier, rdv [ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      source: "Chaussure"
    },
    {
      id: 62,
      question: "Quel est le montant du bonus réparation pour faire réparer son imprimante ?",
      options: [
        "A) 10€",
        "B) 15€",
        "C) 20€",
        "D) 35€",
      ],
      correctAnswer: 3,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "La solution la plus économe en ressources pour allonger la durée de vie d'une imprimante c'est la réparation, avec un Bonus Réparation de 35€ à partir de 150€ de dépense. \nPour en savoir plus et découvrir chez qui vous rendre pour en bénéficier, rdv [ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      source: "EEE"
    },
    {
      id: 65,
      question: "Comment pouvez-vous vous faire aider pour réparer vos objets ?",
      options: [
        "A) Je peux regarder des tutoriels de réparation en ligne",
        "B) Je peux commander une pièce détachée sur Internet",
        "C) Je peux me rendre dans un Repair Café",
        "D) Je peux appeler un professionnel et bénéficier du Bonus Réparation",
      ],
      correctAnswer: [0, 1, 2, 3],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesobjets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "Toutes les options possibles en fonction de votre niveau de \"bricolage\" et votre temps. Le plus important c'est de prendre le réflexe ! Si vous optez pour l'option \"faire réparer par un professionnel\", rdv [ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      source: "Réparation"
    },
    {
      id: 53,
      question: "Quels sont les objets qui peuvent bénéficier du Bonus Réparation ?",
      options: [
        "A) Une bouilloire",
        "B) Une machine à café",
        "C) Les plaques de cuisson",
        "D) Le réfrigérateur",
      ],
      correctAnswer: [0, 1, 2, 3],
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "Tous ces objets permettent de bénéficier du bonus ! Son fonctionnement est très simple : trouver un réparateur labellisé près de chez vous sur le [site dédié](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne), faites réparer votre objet auprès du professionnel, et le bonus réparation sera directement déduit de votre facture.",
      source: "Réparation"
    },
    {
      id: 63,
      question: "Dans quelle situation pouvez-vous bénéficier du Bonus Réparation ?",
      options: [
        "A) Raccourcir un pantalon en faisant un ourlet",
        "B) Refaire la semelle ou le talon d'une chaussure",
        "C) Détartrer votre cafetière",
        "D) Réparer votre blouson en cuir",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "C'est la différence entre réparation, entretien, et adaptation. Le Bonus réparation ne s'applique qu'aux opérations de réparation. Certains articles ne sont pas éligibles au bonus réparation, comme les vêtements en cuir et en fourrure naturelle, ou encore les vêtements techniques de sport à usage non quotidien (chaussures de ski par exemple). Pour tout savoir sur le bonus, c'est [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne).",
      source: "ADEME"
    },
    {
      id: 64,
      question: "Les instruments de musique sont-ils concernés par le Bonus Réparation ?",
      options: [
        "A) Oui !",
        "B) Non",
      ],
      correctAnswer: 0,
      hint: "Rendez-vous par ici ! [par ici](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne)",
      explanation: "Oui bien sûr, les instruments de musique sont concernés, avec un bonus de réparation de 25€. Plus d'infos sur [cette page](https://quefairedemesdechets.ademe.fr/bonus-reparation/?utm_campaign=circularoulette_enligne).",
      source: "ADEME"
    }
  ],

  "ma conso": [
    {
      id: 15,
      question: "Quelle est la durée moyenne d'utilisation d'un jouet par un enfant ?",
      options: [
        "A) 2 mois",
        "B) 8 mois",
        "C) 2 ans",
      ],
      correctAnswer: 1,
      hint: "Rendez-vous par ici ! [par ici](https://librairie.ademe.fr/economie-circulaire-et-dechets/4084-etude-prealable-a-la-mise-en-place-de-la-filiere-rep-jouets.html)",
      explanation: "La durée d'usage d'un jouet est en moyenne de 8 mois alors qu'il pourrait être utilisé bien plus longtemps (sa durée de vie est plus longue que sa durée d'usage). En France, 100 000 tonnes de jouets sont jetés chaque année ! Il existe aujourd'hui la possibilité d'acheter ou de louer des jouets, les bons gestes ça s'apprend dès le début ! Pour trouver où déposer les jouets qui dorment chez vous, c'est [par ici](https://quefairedemesdechets.ademe.fr/dechet/jouet-educatif/?utm_campaign=circularoulette_enligne) !",
      source: "Jouet"
    },
    {
      id: 16,
      question: "Quel est le pourcentage de jouets jetés dans l'année suivant leur achat ?",
      options: [
        "A) Très peu",
        "B) Un tiers",
        "C) La moitié",
        "D) Les trois-quarts",
      ],
      correctAnswer: 2,
      hint: "Rendez-vous par ici ! [par ici](https://librairie.ademe.fr/economie-circulaire-et-dechets/4084-etude-prealable-a-la-mise-en-place-de-la-filiere-rep-jouets.html)",
      explanation: "Oui, la moitié. \nIl existe aujourd'hui la possibilité d'acheter de seconde main, ou de louer des jouets, les bons gestes ça s'apprend dès le début ! \nPour leur donner une seconde vie, rendez-vous [par ici](https://quefairedemesdechets.ademe.fr/dechet/jouet-educatif/?utm_campaign=circularoulette_enligne) et attention, il ne faut surtout pas les déposer dans la poubelle jaune.",
      source: "Jouet"
    }
  ],

  "en train !!!": [
    {
      id: 200,
      question: "À votre avis, que fait TGV des pièces encore en bon état quand une rame TGV est retirée du service ?",
      options: [
        "A) Elles sont jetées",
        "B) Elles sont récupérées pour réparer d'autres trains",
        "C) Elles sont vendues",
        "D) Elles sont fondues en décorations",
      ],
      correctAnswer: 1,
      explanation: "Le programme Opération D'obsolescence Déprogrammée prolonge la vie de 104 rames TGV INOUI.\nPour cela, TGV-IC réutilise un maximum de pièces encore en bon état plutôt que de les jeter.\nCes pièces servent à réparer ou moderniser d'autres trains, ce qui évite de produire du neuf et limite les déchets.\nAu total +10 000 pièces réemployées et recyclées au service de la performance industrielle et environnementale",
      source: "SNCF"
    },
    {
      id: 201,
      question: "Selon vous, le programme Opération D'obsolescence Déprogrammée allonge la durée de vie d'un TGV de... ?",
      options: [
        "A) 1 an",
        "B) 2 ans",
        "C) 5 ans",
        "D) 15 ans",
      ],
      correctAnswer: 3,
      explanation: "L'économie circulaire cherche d'abord à prolonger la durée d'usage des objets plutôt que d'en fabriquer de nouveaux.\nLe programme Opération D'obsolescence Déprogrammée permet de garder les TGV INOUI en service jusqu'à 40–50 ans, avec rénovation et réemploi de pièces.\nCela évite de construire trop de trains neufs et permet d'économiser des ressources et du CO2 (6,7 millions de tonnes de CO2 évitées sur le projet).",
      source: "SNCF"
    },
    {
      id: 202,
      question: "Quand les tenues des agents TGV arrivent en fin de vie, que se passe-t-il ?",
      options: [
        "A) Elles finissent toutes à la poubelle",
        "B) Elles sont collectées et transformées en nouveaux objets ou en nouvelles matières",
        "C) Elles sont stockées à vie dans un entrepôt",
      ],
      correctAnswer: 1,
      explanation: "Les tenues des agents, conçues avec Armor Lux, sont collectées en fin de vie.\nElles sont triées dans une filière dédiée (FRIVEP) et dans l'usine Nouvelles Fibres Textiles à Amplepuis.\nLes textiles sont ensuite recyclés en nouvelles fibres ou upcyclés en objets (sacs, trousses, etc.), plutôt que d'être jetés.",
      source: "SNCF"
    },
    {
      id: 203,
      question: "Selon vous, les tenues des agents TGV conçues avec Armor Lux sont éco-conçues à hauteur de :",
      options: [
        "A) 25 %",
        "B) 50 %",
        "C) 75 %",
      ],
      correctAnswer: 2,
      explanation: "Le partenariat avec Armor Lux vise une circularité du vestiaire des agents.\n75 % du vestiaire est conçu pour être recyclable.\nLes 25 % restants sont valorisables (par exemple en énergie ou en autres usages), donc rien ne part directement à la poubelle.",
      source: "SNCF"
    },
    {
      id: 204,
      question: "À bord d'un TGV, est-il possible d'apporter son propre contenant lorsqu'on souhaite acheter une boisson chaude ?",
      options: [
        "A) Vrai",
        "B) Faux",
      ],
      correctAnswer: 0,
      explanation: "En effet, dans le TGV on peut se faire servir sa boisson chaude achetée au bistro dans son propre contenant afin d'éviter l'utilisation de gobelet jetable, et en prime une petite réduction s'applique.\nPensez aussi à prendre votre gourde au lieu d'acheter plusieurs bouteilles en plastique.",
      source: "SNCF"
    },
    {
      id: 205,
      question: "À bord du TGV, dans quelle poubelle jette-t-on les contenants en verre ?",
      options: [
        "A) On ne peut pas les jeter, on doit les emporter avec nous en dehors du train",
        "B) Dans la poubelle jaune",
        "C) On peut les déposer au barista",
      ],
      correctAnswer: 2,
      explanation: "Dans le TGV, on peut déposer ses contenants en verre directement en voiture bar auprès du barista qui possède une solution de tri afin de voyager plus responsable.",
      source: "SNCF"
    },
    {
      id: 206,
      question: "Selon vous, quel est le taux de recyclabilité du nouveau TGV INOUI qui arrivera courant 2026 sur le réseau ferroviaire ?",
      options: [
        "A) 23 %",
        "B) 56 %",
        "C) 78 %",
        "D) 97 %",
      ],
      correctAnswer: 3,
      explanation: "La nouvelle génération de TGV INOUI est recyclable à 97 %. Les TGV actuels le sont à 92 %, ce qui contribue à en faire le train à grande vitesse avec le bilan carbone le plus faible du marché.",
      source: "SNCF"
    },
    {
      id: 207,
      question: "Selon vous, quel est le taux de matériaux recyclés utilisés pour la fabrication du nouveau TGV INOUI ?",
      options: [
        "A) 1 %",
        "B) 10 %",
        "C) 25 %",
      ],
      correctAnswer: 2,
      explanation: "Le nouveau TGV INOUI a été fabriqué avec 25 % de matériaux issus du recyclage (soit 100 tonnes).",
      source: "SNCF"
    }
  ]
};
