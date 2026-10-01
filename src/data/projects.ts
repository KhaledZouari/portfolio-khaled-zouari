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
