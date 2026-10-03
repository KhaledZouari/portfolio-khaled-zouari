import type { ProjectSlug } from '../config/site';

type Localized = { fr: string; en: string };

export interface Project {
  slug: ProjectSlug | 'enterprise-bi' | 'online-bookstore';
  name: string;
  kind: Localized;
  summary: Localized;
  context: Localized;
  role: Localized;
  features: Localized[];
  architecture: Localized;
  choices: Localized[];
  security: Localized;
  tests: Localized;
  tradeoffs: Localized;
  improvements: Localized[];
  stack: string[];
  repository: string;
  featured: boolean;
  results?: {
    metrics: { label: Localized; value: Localized }[];
    summary: Localized;
  };
  gallery?: { src: string; alt: Localized; caption: Localized; width: number; height: number }[];
}

export const projects: Project[] = [
  {
    slug: 'production-atelier', name: 'Production Atelier', featured: true,
    kind: { fr: 'MES · Projet de fin d’année', en: 'MES · End-of-year project' },
    summary: { fr: 'Piloter la production et la traçabilité d’un atelier textile depuis une interface unique.', en: 'Manage production and traceability in a textile workshop from one interface.' },
    context: { fr: 'Projet académique individuel de fin d’année, testé dans l’environnement de Cartexia Confection.', en: 'Individual academic end-of-year project, tested in the Cartexia Confection environment.' },
    role: { fr: 'Conception et développement individuel du frontend React, de l’API Express et de l’intégration SQL Server.', en: 'Individual design and development of the React frontend, Express API and SQL Server integration.' },
    features: [
      { fr: 'Ordres de fabrication, opérations, employés et présences', en: 'Manufacturing orders, operations, employees and attendance' },
      { fr: 'Suivi des rendements, paniers et traçabilité', en: 'Efficiency, basket and traceability monitoring' },
      { fr: 'Codes QR, codes-barres, alertes et exports PDF/Excel', en: 'QR codes, barcodes, alerts and PDF/Excel exports' },
    ],
    architecture: { fr: 'Client React → API REST Express → services et repositories → SQL Server.', en: 'React client → Express REST API → services and repositories → SQL Server.' },
    choices: [
      { fr: 'Séparation contrôleurs, services et repositories pour isoler les responsabilités.', en: 'Controllers, services and repositories separate responsibilities.' },
      { fr: 'JWT pour les sessions API et validation des entrées côté serveur.', en: 'JWT for API sessions and server-side input validation.' },
    ],
    security: { fr: 'Authentification JWT, mots de passe hachés avec bcrypt et validation Express. Le dépôt ne démontre pas un audit de sécurité complet.', en: 'JWT authentication, bcrypt password hashing and Express validation. The repository does not demonstrate a complete security audit.' },
    tests: { fr: 'Tests Jest ciblés sur les calculs métier ; lint et build exécutés par GitHub Actions.', en: 'Jest tests target business calculations; lint and build run through GitHub Actions.' },
    tradeoffs: { fr: 'Le périmètre MES couvre plusieurs flux métier, mais les tests automatisés restent concentrés sur les calculs.', en: 'The MES scope covers several business workflows, while automated tests remain focused on calculations.' },
    improvements: [
      { fr: 'Étendre les tests d’intégration API et les parcours end-to-end.', en: 'Extend API integration and end-to-end tests.' },
      { fr: 'Formaliser les migrations SQL et l’observabilité.', en: 'Formalize SQL migrations and observability.' },
    ],
    stack: ['React', 'Node.js', 'Express', 'SQL Server', 'JWT', 'Jest'],
    repository: 'https://github.com/KhaledZouari/production-atelier',
  },
  {
    slug: 'carpooling', name: 'Carpooling Platform', featured: true,
    kind: { fr: 'Application Full Stack', en: 'Full-stack application' },
    summary: { fr: 'Organiser la recherche, la réservation et l’administration de trajets avec trois rôles distincts.', en: 'Handle trip search, booking and administration with three distinct roles.' },
    context: { fr: 'Projet académique individuel composé d’un frontend React/TypeScript et d’une API Spring Boot.', en: 'Individual academic project with a React/TypeScript frontend and Spring Boot API.' },
    role: { fr: 'Conception du modèle métier, de l’API sécurisée et des interfaces adaptées aux voyageurs, conducteurs et administrateurs.', en: 'Designed the domain model, secured API and interfaces for travellers, drivers and administrators.' },
    features: [
      { fr: 'Recherche multicritère et gestion des trajets', en: 'Multi-criteria search and trip management' },
      { fr: 'Réservations, véhicules, avis et réclamations', en: 'Bookings, vehicles, reviews and complaints' },
      { fr: 'Modération et statistiques administrateur', en: 'Administrator moderation and statistics' },
    ],
    architecture: { fr: 'SPA React/TypeScript → API REST Spring Boot → services Spring Data JPA → MySQL.', en: 'React/TypeScript SPA → Spring Boot REST API → Spring Data JPA services → MySQL.' },
    choices: [
      { fr: 'DTO dédiés pour séparer les contrats API des entités JPA.', en: 'Dedicated DTOs separate API contracts from JPA entities.' },
      { fr: 'Contrôle d’accès centralisé avec Spring Security et JWT.', en: 'Centralized access control with Spring Security and JWT.' },
    ],
    security: { fr: 'Spring Security, JWT, BCrypt, validation Jakarta et liste CORS configurable.', en: 'Spring Security, JWT, BCrypt, Jakarta validation and configurable CORS allowlist.' },
    tests: { fr: 'Vitest pour un comportement de thème par rôle et test de chargement du contexte Spring avec H2.', en: 'Vitest covers role theme behaviour and a Spring context test runs with H2.' },
    tradeoffs: { fr: 'La séparation frontend/backend est claire, mais la couverture automatisée actuelle ne valide pas tous les workflows.', en: 'The frontend/backend boundary is clear, but current automated coverage does not validate every workflow.' },
    improvements: [
      { fr: 'Tester les règles de réservation et d’autorisation au niveau service/API.', en: 'Test booking and authorization rules at service/API level.' },
      { fr: 'Ajouter une stratégie de migrations de base de données.', en: 'Add a database migration strategy.' },
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'MySQL'],
    repository: 'https://github.com/KhaledZouari/carpooling-platform',
  },
  {
    slug: 'edutrack', name: 'EduTrack', featured: true,
    kind: { fr: 'Plateforme de formation', en: 'Learning platform' },
    summary: { fr: 'Structurer les cours, inscriptions, rôles et tableaux de bord d’une plateforme de formation.', en: 'Structure courses, enrolments, roles and dashboards for a learning platform.' },
    context: { fr: 'Projet académique individuel Full Stack Java/Angular.', en: 'Individual Java/Angular full-stack academic project.' },
    role: { fr: 'Développement de l’API Spring Boot, du modèle relationnel et des écrans Angular.', en: 'Developed the Spring Boot API, relational model and Angular screens.' },
    features: [
      { fr: 'Authentification, réinitialisation et gestion des rôles', en: 'Authentication, password reset and role management' },
      { fr: 'Cours, catégories et inscriptions', en: 'Courses, categories and enrolments' },
      { fr: 'Dashboards étudiant, enseignant et administrateur', en: 'Student, teacher and administrator dashboards' },
    ],
    architecture: { fr: 'Application Angular → API Spring Boot sécurisée → Spring Data JPA → PostgreSQL.', en: 'Angular application → secured Spring Boot API → Spring Data JPA → PostgreSQL.' },
    choices: [
      { fr: 'Formulaires réactifs Angular et services dédiés par domaine.', en: 'Angular reactive forms and domain-specific services.' },
      { fr: 'Tokens d’accès et de rafraîchissement pour l’authentification.', en: 'Access and refresh tokens for authentication.' },
    ],
    security: { fr: 'Spring Security, filtre JWT, gardes et intercepteur Angular ; une intégration Firebase existe également dans le dépôt.', en: 'Spring Security, JWT filter, Angular guards and interceptor; the repository also includes Firebase integration.' },
    tests: { fr: 'Tests JUnit de validation des requêtes et de chargement du contexte ; build Angular et Maven verify en CI.', en: 'JUnit request-validation and context-loading tests; Angular build and Maven verify in CI.' },
    tradeoffs: { fr: 'Deux mécanismes d’authentification apparaissent dans le code, ce qui augmente la complexité de configuration.', en: 'Two authentication mechanisms appear in the code, increasing configuration complexity.' },
    improvements: [
      { fr: 'Clarifier et documenter la stratégie d’identité unique.', en: 'Clarify and document one identity strategy.' },
      { fr: 'Ajouter des tests frontend et des scénarios API.', en: 'Add frontend tests and API scenarios.' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'JUnit'],
    repository: 'https://github.com/KhaledZouari/edutrack',
  },
  {
    slug: 'energyinsight-tunisia', name: 'EnergyInsight Tunisia', featured: true,
    kind: { fr: 'Data Engineering · Machine Learning · BI', en: 'Data Engineering · Machine Learning · BI' },
    summary: {
      fr: 'Transformer 4,48 millions de factures en indicateurs de consommation et en scores pour prioriser les contrôles clients.',
      en: 'Turn 4.48 million invoices into consumption indicators and customer scores to prioritize inspections.',
    },
    context: {
      fr: 'Projet académique d’analyse de facturation à partir du dataset fourni par la STEG et diffusé par Zindi. Le périmètre traité couvre 135 493 clients et 3 079 406 factures électriques. La question métier est de cibler les contrôles tout en mesurant la charge liée aux fausses alertes.',
      en: 'Academic billing analytics project using a dataset attributed to STEG and distributed by Zindi. The implemented scope covers 135,493 customers and 3,079,406 electricity invoices. The business question is how to prioritize inspections while measuring the burden of false alerts.',
    },
    role: {
      fr: 'Construction de la chaîne Python, du nettoyage et des agrégations, de la couche MySQL, de la comparaison des modèles et de la restitution Power BI ; documentation de la provenance, des contrôles de cohérence et des limites métier.',
      en: 'Built the Python processing pipeline, cleaning and aggregations, MySQL analytics layer, model comparison and Power BI reporting; documented provenance, consistency checks and business limitations.',
    },
    features: [
      { fr: 'Traitement des factures par blocs de 200 000 lignes et conversion explicite des dates', en: 'Invoice processing in 200,000-row chunks with explicit date parsing' },
      { fr: 'Statistiques de consommation par client et agrégats par mois de facturation', en: 'Customer consumption statistics and invoice-month aggregates' },
      { fr: 'Comparaison de trois classifieurs avec sélection du modèle et du seuil sur validation', en: 'Comparison of three classifiers with model and threshold selection on validation data' },
      { fr: 'Trois pages Power BI : vue générale, segmentation des risques et performances sur test', en: 'Three Power BI pages: overview, risk segmentation and held-out performance' },
    ],
    architecture: {
      fr: 'CSV sources → inspection et nettoyage Python → variables clients et agrégats mensuels → MySQL → pipelines scikit-learn → résultats vérifiés → Power BI.',
      en: 'Source CSVs → Python inspection and cleaning → customer features and monthly aggregates → MySQL → scikit-learn pipelines → verified results → Power BI.',
    },
    choices: [
      { fr: 'Séparation stratifiée par client : 60 % entraînement, 20 % validation, 20 % test ; prétraitements appris dans la Pipeline sur l’entraînement uniquement.', en: 'Customer-level stratified split: 60% training, 20% validation, 20% test; preprocessing fitted inside the Pipeline on training data only.' },
      { fr: 'Classes pondérées et comparaison à une baseline toujours négative, pour interpréter une cible minoritaire de 5,58 %.', en: 'Class weighting and an always-negative baseline to interpret a minority target with 5.58% prevalence.' },
      { fr: 'Distinction entre consommation nulle et absence de facture : 678 clients conservés dans le reporting sans score artificiel.', en: 'Zero consumption distinguished from missing invoice history: 678 customers retained in reporting without an artificial score.' },
      { fr: 'Empreintes des fichiers, sorties provisoires et vérification de cohérence CSV/MySQL avant publication.', en: 'File hashes, staged outputs and CSV/MySQL consistency checks before publication.' },
    ],
    security: {
      fr: 'Secrets de connexion conservés hors Git. Le dépôt et les captures publiques présentent le code et les résultats agrégés ; les données individuelles, prédictions détaillées et fichiers PBIX contenant le dataset restent locaux.',
      en: 'Connection secrets are kept outside Git. The repository and public captures contain code and aggregate results; individual data, detailed predictions and dataset-bearing PBIX files remain local.',
    },
    tests: {
      fr: 'Quatre tests de régression réussis sur les dates, les types SQL, les variables et les identifiants SQL ; GitHub Actions vérifie les dépendances et le code. La vérification locale complète enregistrée comporte 128 contrôles réussis.',
      en: 'Four passing regression tests cover dates, SQL types, feature independence and SQL identifiers; GitHub Actions checks dependencies and code. The recorded full local verification contains 128 successful checks.',
    },
    tradeoffs: {
      fr: 'Le modèle classe rétrospectivement les clients, sans date de diagnostic permettant de démontrer une détection anticipée. Au seuil retenu, 652 cas positifs sont retrouvés mais 3 202 fausses alertes sont générées sur le test. Les scores ne sont pas démontrés calibrés et les factures antérieures à 2005 demandent une vérification de provenance.',
      en: 'The model classifies customers retrospectively, without diagnosis dates to demonstrate early detection. At the selected threshold, it finds 652 positive cases but generates 3,202 false alerts on the test set. Scores are not demonstrated calibrated, and pre-2005 invoices need provenance review.',
    },
    improvements: [
      { fr: 'Confirmer les dates, les unités et la portée de l’étiquette de fraude ; normaliser par période de facturation.', en: 'Confirm dates, units and the scope of the fraud label; normalize by billing-period length.' },
      { fr: 'Choisir le seuil selon la capacité et le coût des contrôles, puis valider une cohorte plus récente et indépendante.', en: 'Choose the threshold using inspection capacity and cost, then validate on a newer independent cohort.' },
    ],
    stack: ['Python', 'Pandas', 'MySQL', 'scikit-learn', 'Power BI', 'SQLAlchemy'],
    repository: 'https://github.com/KhaledZouari/energyinsight-tunisia',
    results: {
      metrics: [
        { label: { fr: 'Factures sources', en: 'Source invoices' }, value: { fr: '4,48 M', en: '4.48 M' } },
        { label: { fr: 'Clients du test indépendant', en: 'Held-out test customers' }, value: { fr: '26 963', en: '26,963' } },
        { label: { fr: 'Précision sur test', en: 'Test precision' }, value: { fr: '16,92 %', en: '16.92%' } },
        { label: { fr: 'Rappel sur test', en: 'Test recall' }, value: { fr: '43,12 %', en: '43.12%' } },
      ],
      summary: {
        fr: 'HistGradientBoosting est retenu avec un seuil de 0,6484. Sur 26 963 clients indépendants, le modèle obtient une ROC-AUC de 0,7695 et un F1 de 0,2430. Il détecte 652 des 1 512 cas positifs parmi 3 854 alertes. Ces résultats étayent un prototype de priorisation des contrôles, avec une charge importante de fausses alertes. Les vues générales sont descriptives ; seules les métriques du test mesurent la performance indépendante.',
        en: 'HistGradientBoosting is selected at a threshold of 0.6484. On 26,963 held-out customers, it achieves ROC-AUC 0.7695 and F1 0.2430. It identifies 652 of 1,512 positive cases among 3,854 alerts. These results support a prototype for inspection prioritization, with a substantial false-alert burden. Overview pages are descriptive; only test metrics measure independent performance.',
      },
    },
    gallery: [
      { src: '/images/energyinsight/powerbi-overview.png', width: 1306, height: 693,
        alt: { fr: 'Vue Power BI avec les indicateurs clients, factures, consommation et répartition des niveaux de risque.', en: 'Power BI overview with customer, invoice, billed consumption and risk-band indicators.' },
        caption: { fr: 'Vue générale — indicateurs du dataset et évolution des consommations par mois de facturation.', en: 'Overview — dataset indicators and consumption totals grouped by invoice month.' } },
      { src: '/images/energyinsight/powerbi-risk-segmentation.png', width: 524, height: 293,
        alt: { fr: 'Graphique Power BI des niveaux de risque par catégorie de client.', en: 'Power BI chart of score-band distribution by customer category.' },
        caption: { fr: 'Segmentation — répartition des bandes de score par catégorie de client.', en: 'Segmentation — score-band distribution by customer category.' } },
      { src: '/images/energyinsight/powerbi-risk-regions.png', width: 404, height: 395,
        alt: { fr: 'Graphique Power BI du nombre de clients prédits positifs par code de région.', en: 'Power BI chart of positive-prediction counts by region code.' },
        caption: { fr: 'Analyse régionale — nombre d’alertes par code de région, et non taux de fraude régional.', en: 'Regional analysis — alert counts by region code, rather than regional fraud rates.' } },
      { src: '/images/energyinsight/powerbi-model-performance.png', width: 1306, height: 645,
        alt: { fr: 'Résultats Power BI du test : précision 16,92 %, rappel 43,12 %, F1 24,30 % et matrice de confusion.', en: 'Power BI test results: precision 16.92%, recall 43.12%, F1 24.30% and confusion matrix.' },
        caption: { fr: 'Évaluation indépendante — métriques du test et matrice de confusion. Captures réelles du rapport local, dont les libellés sont en français.', en: 'Independent evaluation — test metrics and confusion matrix. Actual captures of the local report, whose labels are in French.' } },
    ],
  },
  {
    slug: 'minidrawfx', name: 'MiniDrawFX', featured: true,
    kind: { fr: 'Architecture logicielle Java', en: 'Java software architecture' },
    summary: { fr: 'Construire un éditeur graphique extensible autour de patterns logiciels explicites.', en: 'Build an extensible graphical editor around explicit software patterns.' },
    context: { fr: 'Projet académique individuel centré sur JavaFX et la conception orientée objet.', en: 'Individual academic project focused on JavaFX and object-oriented design.' },
    role: { fr: 'Conception de l’architecture, des outils de dessin, de la persistance et de l’historique de commandes.', en: 'Designed the architecture, drawing tools, persistence and command history.' },
    features: [
      { fr: 'Dessin de formes et application d’effets', en: 'Shape drawing and visual effects' },
      { fr: 'Annulation/rétablissement avec historique de commandes', en: 'Undo/redo with command history' },
      { fr: 'Persistance SQLite, JSON et binaire ; export PNG', en: 'SQLite, JSON and binary persistence; PNG export' },
    ],
    architecture: { fr: 'Vue FXML → contrôleur JavaFX → commandes et services → repositories SQLite/JSON.', en: 'FXML view → JavaFX controller → commands and services → SQLite/JSON repositories.' },
    choices: [
      { fr: 'Command pour Undo/Redo et Decorator pour composer les effets.', en: 'Command for undo/redo and Decorator to compose effects.' },
      { fr: 'Repository et Factory pour substituer les modes de persistance et de création.', en: 'Repository and Factory make persistence and creation strategies replaceable.' },
    ],
    security: { fr: 'Application desktop locale sans authentification ; aucune donnée distante n’est requise.', en: 'Local desktop application without authentication; no remote data is required.' },
    tests: { fr: 'Tests JUnit du service de formes et vérification Maven dans GitHub Actions.', en: 'JUnit shape-service tests and Maven verification in GitHub Actions.' },
    tradeoffs: { fr: 'L’usage pédagogique de nombreux patterns renforce la modularité mais augmente le nombre de classes.', en: 'Using several patterns for learning improves modularity but increases the class count.' },
    improvements: [
      { fr: 'Tester davantage l’historique de commandes et la persistance.', en: 'Expand command-history and persistence testing.' },
      { fr: 'Ajouter une sérialisation versionnée des dessins.', en: 'Add versioned drawing serialization.' },
    ],
    stack: ['Java 21', 'JavaFX', 'FXML', 'JDBC', 'SQLite', 'JUnit 5'],
    repository: 'https://github.com/KhaledZouari/minidrawfx',
  },
  {
    slug: 'enterprise-bi', name: 'Enterprise BI Dashboard', featured: false,
    kind: { fr: 'Business Intelligence', en: 'Business Intelligence' },
    summary: { fr: 'Transformer des données de ventes et d’achats en analyses multidimensionnelles.', en: 'Turn sales and purchasing data into multidimensional analysis.' },
    context: { fr: 'Projet académique individuel.', en: 'Individual academic project.' }, role: { fr: 'Conception du modèle en étoile, des flux SSIS, du cube SSAS, des requêtes MDX et du dashboard.', en: 'Designed the star schema, SSIS flows, SSAS cube, MDX queries and dashboard.' },
    features: [], architecture: { fr: 'Sources → ETL SSIS → Data Warehouse SQL Server → cube SSAS → ASP.NET Core.', en: 'Sources → SSIS ETL → SQL Server Data Warehouse → SSAS cube → ASP.NET Core.' }, choices: [], security: { fr: 'Accès au cube via configuration serveur ; aucune donnée métier réelle n’est publiée.', en: 'Server-configured cube access; no real business data is published.' }, tests: { fr: 'Build .NET en CI ; aucun projet de test automatisé publié.', en: '.NET build in CI; no published automated test project.' }, tradeoffs: { fr: 'Le dépôt public nécessite une instance SSAS et un cube déployé.', en: 'The public repository requires an SSAS instance and a deployed cube.' }, improvements: [],
    stack: ['ASP.NET Core', 'C#', 'SQL Server', 'SSIS', 'SSAS', 'MDX', 'Chart.js'], repository: 'https://github.com/KhaledZouari/enterprise-bi-dashboard',
  },
  {
    slug: 'online-bookstore', name: 'Online Bookstore', featured: false,
    kind: { fr: 'Application e-commerce', en: 'E-commerce application' }, summary: { fr: 'Gérer un catalogue, un panier et des commandes avec Symfony.', en: 'Manage a catalogue, cart and orders with Symfony.' }, context: { fr: 'Projet académique individuel.', en: 'Individual academic project.' }, role: { fr: 'Développement de l’application Symfony et du modèle Doctrine.', en: 'Developed the Symfony application and Doctrine model.' }, features: [], architecture: { fr: 'Contrôleurs Symfony → services et repositories Doctrine → MySQL.', en: 'Symfony controllers → Doctrine services and repositories → MySQL.' }, choices: [], security: { fr: 'Authentification et rôles avec Symfony Security.', en: 'Authentication and roles with Symfony Security.' }, tests: { fr: 'CI de lint et PHPUnit configuré, sans classe de test métier publiée.', en: 'Lint CI and PHPUnit configured, without a published business test class.' }, tradeoffs: { fr: 'Projet secondaire présenté de façon concise.', en: 'Secondary project presented concisely.' }, improvements: [], stack: ['Symfony', 'PHP', 'MySQL', 'Twig', 'Doctrine'], repository: 'https://github.com/KhaledZouari/online-bookstore-symfony',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
