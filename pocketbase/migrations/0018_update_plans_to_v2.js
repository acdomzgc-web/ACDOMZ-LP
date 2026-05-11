migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('plans')

    app
      .db()
      .newQuery("DELETE FROM plans WHERE name NOT IN ('STARTER', 'MEDIUM', 'EXPERT')")
      .execute()

    const plans = [
      {
        name: 'STARTER',
        description: 'Presença digital profissional com baixo investimento inicial.',
        price_sub_setup: 'R$ 497,00',
        price_sub_monthly: 'R$ 97,00/mês',
        price_one_time: 'R$ 497,00',
        features: [
          '3 a 5 páginas',
          'Design responsivo',
          'Até 5 fotos otimizadas',
          'SEO básico',
          'Google Analytics',
          'Certificado SSL',
          'Formulário de contato',
          'Favicon personalizado',
          'Meta descrição',
          'Exportação via GitHub',
          'Domínio: nomesite.goskip.app',
        ],
        one_time_benefits: ['Design responsivo', 'Configuração de domínio', 'SEO Básico'],
        subscription_benefits: ['Hospedagem', 'Suporte via Email'],
        order: 1,
      },
      {
        name: 'MEDIUM',
        description: 'Captura de leads e contato direto via WhatsApp.',
        price_sub_setup: 'R$ 997,00',
        price_sub_monthly: 'R$ 147,00/mês',
        price_one_time: 'R$ 997,00',
        features: [
          '5 a 10 páginas',
          '10 fotos + vídeos',
          'Galeria com lightbox',
          'Chatbot básico',
          'SEO otimizado',
          'Integração redes sociais',
          'Domínio .com/.com.br',
          'Botão WhatsApp flutuante',
          'Botão e-mail',
          'Até 2 integrações',
          'FAQ',
          'Card de preço resumido',
        ],
        one_time_benefits: [
          'Design responsivo',
          'Configuração de domínio',
          'SEO Otimizado',
          'Integração WhatsApp',
        ],
        subscription_benefits: ['Hospedagem', 'Suporte Prioritário WhatsApp', 'Manutenção Mensal'],
        order: 2,
      },
      {
        name: 'EXPERT',
        description: 'Site completo com chatbot IA integrado para qualificar leads.',
        price_sub_setup: 'R$ 1.497,00',
        price_sub_monthly: 'R$ 197,00/mês',
        price_one_time: 'R$ 1.497,00',
        features: [
          '8 a 15 páginas',
          '20+ fotos + vídeos',
          'Banco de dados dedicado (Supabase Pro)',
          'Chatbot com IA (GPT-4/Claude)',
          'Botão WhatsApp auto-msg',
          'Vitrine de produtos/cursos',
          'Integração pagamentos (Stripe/MP)',
          'Dashboards e gráficos',
          'SEO avançado',
          'API para integrações',
          'Análise de comportamento',
        ],
        one_time_benefits: [
          'Design responsivo',
          'Configuração IA',
          'Integração de Pagamentos',
          'Setup Completo',
        ],
        subscription_benefits: [
          'Hospedagem Dedicada',
          'Suporte 24/7',
          'Gestão de Banco de Dados',
          'Evolução Contínua',
        ],
        order: 3,
      },
    ]

    plans.forEach((p) => {
      try {
        const record = app.findFirstRecordByData('plans', 'name', p.name)
        record.set('description', p.description)
        record.set('price_sub_setup', p.price_sub_setup)
        record.set('price_sub_monthly', p.price_sub_monthly)
        record.set('price_one_time', p.price_one_time)
        record.set('features', p.features)
        record.set('one_time_benefits', p.one_time_benefits)
        record.set('subscription_benefits', p.subscription_benefits)
        record.set('order', p.order)
        app.save(record)
      } catch (_) {
        const record = new Record(col)
        record.set('name', p.name)
        record.set('description', p.description)
        record.set('price_sub_setup', p.price_sub_setup)
        record.set('price_sub_monthly', p.price_sub_monthly)
        record.set('price_one_time', p.price_one_time)
        record.set('features', p.features)
        record.set('one_time_benefits', p.one_time_benefits)
        record.set('subscription_benefits', p.subscription_benefits)
        record.set('order', p.order)
        app.save(record)
      }
    })
  },
  (app) => {
    // Revert logic omitted as data updates might overwrite previous values that weren't stored.
  },
)
