migrate(
  (app) => {
    const projectsCol = app.findCollectionByNameOrId('projects')

    // 1. Delete unwanted projects
    const allProjects = app.findRecordsByFilter('projects', '1=1', '', 100, 0)
    for (const p of allProjects) {
      const title = p.getString('title')
      const company = p.getString('company')
      if (
        title.includes('Plataforma de Alta Conversão') ||
        title.includes('Sistema de Agendamento') ||
        company.includes('Plataforma de Alta Conversão') ||
        company.includes('Sistema de Agendamento') ||
        company === 'TechFit' ||
        company === 'Agendei'
      ) {
        app.delete(p)
      }
    }

    // 2. Sync Acdomz
    let acdomz
    try {
      acdomz = app.findFirstRecordByData('projects', 'company', 'Acdomz')
    } catch (_) {
      acdomz = new Record(projectsCol)
    }
    acdomz.set('title', 'Sistema gestão condominal')
    acdomz.set('company', 'Acdomz')
    acdomz.set('niche', 'Gestão de Condomínios')
    if (!acdomz.getString('description')) {
      acdomz.set(
        'description',
        'Portal CRM focado em prospecção e gestão de leads para administradoras de condomínios.',
      )
    }
    if (!acdomz.getString('features')) {
      acdomz.set('features', 'Pipeline de Vendas Kanban;Dashboard Analítico;Gestão de Leads')
    }

    // Update image with a dashboard placeholder matching the provided context
    try {
      const file = $filesystem.fileFromURL(
        'https://img.usecurling.com/p/1200/800?q=dashboard%20dark&color=black',
        15,
      )
      acdomz.set('image', file)
    } catch (err) {
      console.log('Failed to fetch image for Acdomz', err)
    }
    app.save(acdomz)

    // 3. Sync Eleve Pilates
    let eleve
    try {
      eleve = app.findFirstRecordByData('projects', 'company', 'Eleve Pilates')
    } catch (_) {
      eleve = new Record(projectsCol)
    }
    eleve.set('title', 'Site Institucional')
    eleve.set('company', 'Eleve Pilates')
    eleve.set('niche', 'Saúde & Bem-estar')
    if (!eleve.getString('description')) {
      eleve.set(
        'description',
        'Presença digital otimizada para captação de novos alunos de pilates e fisioterapia.',
      )
    }
    if (!eleve.getString('features')) {
      eleve.set('features', 'Agendamento Online;Blog Integrado;SEO Otimizado')
    }
    app.save(eleve)

    // 4. Sync Stars Treinamento
    let stars
    try {
      stars = app.findFirstRecordByData('projects', 'company', 'Stars Treinamento')
    } catch (_) {
      stars = new Record(projectsCol)
    }
    stars.set('title', 'Landing Page')
    stars.set('company', 'Stars Treinamento')
    stars.set('niche', 'Educação Corporativa')
    if (!stars.getString('description')) {
      stars.set(
        'description',
        'Página de alta conversão focada em vendas de treinamentos corporativos e palestras.',
      )
    }
    if (!stars.getString('features')) {
      stars.set('features', 'Alta Conversão;Design Responsivo;Integração com CRM')
    }
    app.save(stars)
  },
  (app) => {
    // Down migration left empty to prevent accidental loss of synced data
  },
)
