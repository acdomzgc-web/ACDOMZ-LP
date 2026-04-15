migrate(
  (app) => {
    // Seed admin user
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'acdomz.gc@gmail.com')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('acdomz.gc@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin')
      app.save(record)
    }

    const projectsCol = app.findCollectionByNameOrId('projects')

    // Truncate to ensure clean state and remove any prior test data
    app.truncateCollection(projectsCol)

    const seedProjects = [
      {
        title: 'Sistema Gestão Condominial',
        company: 'Acdomz',
        niche: 'Gestão Condominial',
        description:
          'Sistema de gestão para empresas de sindicatura profissional com controle absoluto de operação.',
        features:
          'Controle de condomínios, administradoras e síndicos; CRM de prospecção; Cálculo de honorários automáticos; Dashboards financeiros.',
      },
      {
        title: 'Site Eleve Pilates',
        company: 'Eleve Pilates e Performance',
        niche: 'Saúde e Bem estar',
        description:
          'Plataforma focada em autoridade e credibilidade de marca para estúdios de Pilates.',
        features:
          'Metodologia de ensino; História da fundadora; Exibição de unidades; Tabela de preços e planos; Suporte ao aluno.',
      },
      {
        title: 'Site Stars Treinamento',
        company: 'Stars Treinamento',
        niche: 'Fitness',
        description:
          'Interface moderna projetada para maximizar a autoridade de consultorias fitness.',
        features:
          'Metodologia de treino 2:1; Gestão de fadiga; História dos fundadores; Planos de assinatura; Suporte especializado.',
      },
    ]

    for (const p of seedProjects) {
      const record = new Record(projectsCol)
      record.set('title', p.title)
      record.set('company', p.company)
      record.set('niche', p.niche)
      record.set('description', p.description)
      record.set('features', p.features)
      app.save(record)
    }
  },
  (app) => {
    try {
      const admin = app.findAuthRecordByEmail('_pb_users_auth_', 'acdomz.gc@gmail.com')
      app.delete(admin)
    } catch (_) {}

    const projectsCol = app.findCollectionByNameOrId('projects')
    app.truncateCollection(projectsCol)
  },
)
