export const skillGroups = [
  { name: { fr: 'Data Engineering', en: 'Data Engineering' }, items: ['Python', 'SQL', 'Pandas', 'SQLAlchemy', 'ETL', 'Data Pipelines', 'Data Quality'] },
  { name: { fr: 'Data Warehouse & Business Intelligence', en: 'Data Warehouse & Business Intelligence' }, items: ['Star schema', 'SSIS', 'SSAS', 'OLAP', 'MDX', 'Power BI', 'Power Query'] },
  { name: { fr: 'Langages', en: 'Languages' }, items: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL'] },
  { name: { fr: 'Backend', en: 'Backend' }, items: ['Spring Boot', 'Spring Security', '.NET', 'ASP.NET Core', 'Node.js', 'Express', 'Symfony'] },
  { name: { fr: 'Frontend', en: 'Frontend' }, items: ['React', 'Angular', 'Handlebars', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3'] },
  { name: { fr: 'Bases de données', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'SQLite'] },
  { name: { fr: 'Analyse & Machine Learning', en: 'Analytics & Machine Learning' }, items: ['Pandas', 'scikit-learn', 'SQLAlchemy'] },
  { name: { fr: 'Qualité & outils', en: 'Quality & tools' }, items: ['Git', 'GitHub', 'Maven', 'npm', 'Gulp', 'JUnit', 'Vitest', 'API REST', 'JWT', 'Design Patterns', 'CI'] },
  { name: { fr: 'Notions', en: 'Familiar with' }, items: ['Docker'] },
] as const;

export const dataCapabilities = [
  { step: '01', title: { fr: 'Construire les pipelines', en: 'Build data pipelines' }, description: { fr: 'Lire les factures par lots de 200 000 lignes, nettoyer les données avec Pandas et charger MySQL via SQLAlchemy.', en: 'Read invoices in 200,000-row batches, clean data with Pandas and load MySQL through SQLAlchemy.' }, proof: { fr: '4 476 749 factures sources · EnergyInsight', en: '4,476,749 source invoices · EnergyInsight' }, slug: 'energyinsight-tunisia' },
  { step: '02', title: { fr: 'Vérifier la qualité', en: 'Check data quality' }, description: { fr: 'Contrôler les dates, les types et la cohérence des données. Corriger une anomalie de parsing touchant 1 242 886 dates et documenter les vérifications.', en: 'Check dates, types and data consistency. Correct a parsing issue affecting 1,242,886 dates and document verification.' }, proof: { fr: '128 contrôles réussis · EnergyInsight', en: '128 successful checks · EnergyInsight' }, slug: 'energyinsight-tunisia' },
  { step: '03', title: { fr: 'Modéliser pour la décision', en: 'Model for decision-making' }, description: { fr: 'Structurer un Data Warehouse en étoile, alimenter les données avec SSIS et interroger le cube SSAS avec MDX.', en: 'Design a star-schema data warehouse, load data with SSIS and query the SSAS cube with MDX.' }, proof: { fr: '2 tables de faits · 5 dimensions · Enterprise BI', en: '2 fact tables · 5 dimensions · Enterprise BI' }, slug: 'enterprise-bi' },
] as const;
