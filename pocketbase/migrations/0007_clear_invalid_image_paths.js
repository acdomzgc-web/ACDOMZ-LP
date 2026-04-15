migrate(
  (app) => {
    // Clear invalid image paths first (paths starting with src/ which break the dashboard file uploader)
    app
      .db()
      .newQuery(`
    UPDATE projects 
    SET image = '' 
    WHERE image LIKE 'src/%'
  `)
      .execute()

    const projects = app.findCollectionByNameOrId('projects')

    const seedData = [
      {
        company: 'ACDOMZ',
        title: 'Plataforma de Alta Conversão',
        niche: 'Tecnologia',
        description:
          'Desenvolvimento de plataforma focada em conversão, integrando design moderno e alta performance.',
        features: 'Design Responsivo; Otimização de SEO; Integração com Analytics',
      },
      {
        company: 'Eleve Pilates',
        title: 'Sistema de Agendamento',
        niche: 'Saúde e Bem-estar',
        description:
          'Plataforma completa para gestão de alunos e agendamento de aulas de pilates online.',
        features: 'Agendamento Online; Painel do Aluno; Gestão de Pagamentos',
      },
      {
        company: 'Stars Treinamento',
        title: 'Portal E-learning',
        niche: 'Educação Corporativa',
        description:
          'Ambiente virtual de aprendizagem customizado para treinamentos corporativos e capacitação profissional.',
        features: 'Cursos em Vídeo; Certificação Automática; Relatórios de Progresso',
      },
    ]

    for (const data of seedData) {
      try {
        app.findFirstRecordByData('projects', 'company', data.company)
      } catch (_) {
        const record = new Record(projects)
        record.set('company', data.company)
        record.set('title', data.title)
        record.set('niche', data.niche)
        record.set('description', data.description)
        record.set('features', data.features)
        app.save(record)
      }
    }
  },
  (app) => {
    // Not easily reversible
  },
)
