migrate(
  (app) => {
    const records = app.findRecordsByFilter(
      'projects',
      "title ~ 'Eleve' || company ~ 'Eleve'",
      '',
      1,
      0,
    )

    if (records.length > 0) {
      const record = records[0]
      record.set('company', 'Acdomz')
      record.set('niche', 'Serviços')
      record.set('title', 'Site Acdomz Gestão Condominal')
      record.set(
        'description',
        'site para mostrar todos os serviços que a empresa ACDOMZ pode prestar, Sindicatura Profissional, Laudos de engenharia e Consultoria Gestão e IA.',
      )
      record.set(
        'features',
        'Sindicatura Profissional;Laudos de engenharia;Consultoria Gestão e IA',
      )
      app.save(record)
    } else {
      try {
        app.findFirstRecordByData('projects', 'title', 'Site Acdomz Gestão Condominal')
      } catch (_) {
        const col = app.findCollectionByNameOrId('projects')
        const record = new Record(col)
        record.set('company', 'Acdomz')
        record.set('niche', 'Serviços')
        record.set('title', 'Site Acdomz Gestão Condominal')
        record.set(
          'description',
          'site para mostrar todos os serviços que a empresa ACDOMZ pode prestar, Sindicatura Profissional, Laudos de engenharia e Consultoria Gestão e IA.',
        )
        record.set(
          'features',
          'Sindicatura Profissional;Laudos de engenharia;Consultoria Gestão e IA',
        )
        app.save(record)
      }
    }
  },
  (app) => {
    try {
      const records = app.findRecordsByFilter(
        'projects',
        "title = 'Site Acdomz Gestão Condominal'",
        '',
        1,
        0,
      )
      if (records.length > 0) {
        const record = records[0]
        record.set('company', 'Eleve Pilates')
        record.set('niche', 'Saúde e Bem-estar')
        record.set('title', 'Estúdio Eleve Pilates')
        record.set(
          'description',
          'Plataforma completa para gestão de alunos e agendamento de aulas de pilates.',
        )
        record.set('features', 'Agendamento online;Gestão de alunos')
        app.save(record)
      }
    } catch (_) {}
  },
)
