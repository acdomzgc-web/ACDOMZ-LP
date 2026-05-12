migrate(
  (app) => {
    const plansCol = app.findCollectionByNameOrId('plans')

    app.db().newQuery('DELETE FROM plans').execute()

    const plan1 = new Record(plansCol)
    plan1.set('name', 'SETUP 1')
    plan1.set(
      'description',
      'Presença Digital Essencial. Viabiliza uma vitrine profissional na internet com custo reduzido.',
    )
    plan1.set('price_one_time', 'R$ 497,00')
    plan1.set('price_sub_setup', 'R$ 497,00')
    plan1.set('price_sub_monthly', 'R$ 97,00/mês')
    plan1.set('features', [
      '3 a 5 páginas responsivas',
      'Até 5 fotos otimizadas',
      'SEO Básico + Meta Descrição',
      'Domínio: nomesite.goskip.app',
      'Certificado SSL e GitHub Export',
    ])
    plan1.set('one_time_benefits', [])
    plan1.set('subscription_benefits', [
      'Hospedagem e backups semanais',
      'Suporte via email (48h)',
      'Até 2 pequenas alterações/mês',
    ])
    plan1.set('order', 1)
    app.save(plan1)

    const plan2 = new Record(plansCol)
    plan2.set('name', 'SETUP 2')
    plan2.set(
      'description',
      'Crescimento e Engajamento. Foco total em geração de leads e facilitação do contato direto.',
    )
    plan2.set('price_one_time', 'R$ 997,00')
    plan2.set('price_sub_setup', 'R$ 997,00')
    plan2.set('price_sub_monthly', 'R$ 147,00/mês')
    plan2.set('features', [
      '5 a 10 páginas responsivas',
      'Até 10 fotos + galeria de vídeos',
      'Botão flutuante de WhatsApp e FAQ',
      'Até 2 integrações (Maps, Calendly)',
      'Domínio .com ou .com.br (1 ano)',
    ])
    plan2.set('one_time_benefits', [])
    plan2.set('subscription_benefits', [
      'Hospedagem e backups diários',
      'Suporte prioritário via email (24h)',
      '4 ajustes/mês (1 por semana)',
    ])
    plan2.set('order', 2)
    app.save(plan2)

    const plan3 = new Record(plansCol)
    plan3.set('name', 'SETUP 3')
    plan3.set(
      'description',
      'Site Completo e Chatbot com IA. Um site robusto para qualificar o atendimento inicial e direcionar à conversão final.',
    )
    plan3.set('price_one_time', 'R$ 1.497,00')
    plan3.set('price_sub_setup', 'R$ 1.497,00')
    plan3.set('price_sub_monthly', 'R$ 197,00/mês')
    plan3.set('features', [
      '8 a 15 páginas responsivas',
      'Chatbot com IA (GPT-4 / Claude)',
      'Banco de dados dedicado (Supabase)',
      'Vitrine de produtos e Dashboards',
      'Integrações avançadas (CRM, Webhooks)',
    ])
    plan3.set('one_time_benefits', [])
    plan3.set('subscription_benefits', [
      'Manutenção da IA e hospedagem premium',
      'Suporte via WhatsApp 24/7',
      '8 ajustes/mês (2 por semana)',
    ])
    plan3.set('order', 3)
    app.save(plan3)
  },
  (app) => {
    app.db().newQuery('DELETE FROM plans').execute()
  },
)
