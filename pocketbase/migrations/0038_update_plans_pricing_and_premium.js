migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('plans')

    // Add tagline field if not present
    if (!col.fields.getByName('tagline')) {
      col.fields.add(new TextField({ name: 'tagline' }))
    }

    // Remove recurrence fields if present
    const toRemove = [
      'price_sub_setup',
      'price_sub_monthly',
      'subscription_benefits',
      'one_time_benefits',
    ]
    for (const fieldName of toRemove) {
      const field = col.fields.getByName(fieldName)
      if (field) {
        col.fields.removeByName(fieldName)
      }
    }

    app.save(col)

    // Clear existing plans and seed the new 4 plans
    app.db().newQuery('DELETE FROM plans').execute()

    const commonItems = [
      'Nome do site personalizado',
      'Favicon',
      'Certificado SSL',
      'GitHub Export',
      'Domínio: nomesite.goskip.app',
    ]

    const newPlans = [
      {
        name: 'STARTER',
        tagline: 'Presença Digital Essencial',
        description:
          'Presença Digital Essencial. Viabiliza uma vitrine profissional na internet com custo reduzido.',
        price_one_time: 'R$ 997,00',
        order: 1,
        features: [
          '3 a 5 páginas responsivas',
          'Até 5 fotos otimizadas',
          'SEO Básico + Meta Descrição',
          ...commonItems,
        ],
      },
      {
        name: 'MEDIUM',
        tagline: 'Geração de Leads e Contato Direto',
        description:
          'Geração de Leads e Contato Direto. Foco total em conversão de leads e facilitação do contato imediato.',
        price_one_time: 'R$ 1.497,00',
        order: 2,
        features: [
          '5 a 10 dobras responsivas',
          '10 fotos inclusas',
          'Botão flutuante de WhatsApp + FAQ',
          'Até 2 integrações',
          'SEO Avançado + Meta Descrição',
          ...commonItems,
        ],
      },
      {
        name: 'EXPERT',
        tagline: 'Site Completo com Atendimento Automatizado por IA',
        description:
          'Site Completo com Atendimento Automatizado por IA. Qualifica leads, responde dúvidas e direciona pra conversão.',
        price_one_time: 'R$ 2.997,00',
        order: 3,
        features: [
          '10 dobras no site',
          'Fotos ilimitadas',
          'Botão flutuante de WhatsApp + FAQ',
          '3+ integrações',
          'Chatbot personalizado com IA (qualifica lead, responde dúvidas, direciona pra conversão)',
          'Integração com infoprodutos de alta conversão',
          'SEO Avançado + Meta Descrição',
          ...commonItems,
        ],
      },
      {
        name: 'PREMIUM',
        tagline: 'O que há de mais avançado no mercado, com movimento 3D e experiência de marca',
        description:
          'O que há de mais avançado no mercado. Experiência de marca de alto impacto com 3D, WebGL e motion design sob medida.',
        price_one_time: 'R$ 6.997,00',
        order: 4,
        features: [
          'Tudo o que está incluso no plano Expert',
          'Animações 3D / WebGL personalizadas',
          'Motion design cinematográfico (transições, scroll storytelling)',
          'Interações avançadas sob medida (não template)',
          'Stack de ponta: Next.js, Framer Motion, GSAP, Three.js',
          'Otimização de performance para animações pesadas',
          'Consultoria de direção de arte incluída',
          ...commonItems,
        ],
      },
    ]

    for (const planData of newPlans) {
      const record = new Record(col)
      record.set('name', planData.name)
      record.set('tagline', planData.tagline)
      record.set('description', planData.description)
      record.set('price_one_time', planData.price_one_time)
      record.set('order', planData.order)
      record.set('features', planData.features)
      app.save(record)
    }
  },
  (app) => {
    // Down migration
    const col = app.findCollectionByNameOrId('plans')
    if (!col.fields.getByName('price_sub_setup')) {
      col.fields.add(new TextField({ name: 'price_sub_setup' }))
    }
    if (!col.fields.getByName('price_sub_monthly')) {
      col.fields.add(new TextField({ name: 'price_sub_monthly' }))
    }
    if (!col.fields.getByName('subscription_benefits')) {
      col.fields.add(new JSONField({ name: 'subscription_benefits' }))
    }
    if (!col.fields.getByName('one_time_benefits')) {
      col.fields.add(new JSONField({ name: 'one_time_benefits' }))
    }
    if (col.fields.getByName('tagline')) {
      col.fields.removeByName('tagline')
    }
    app.save(col)
  },
)
