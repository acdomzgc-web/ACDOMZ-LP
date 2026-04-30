migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('plans')

    const plans = [
      {
        name: 'STARTER',
        description: 'Site simples e profissional para pequenos negócios e profissionais liberais.',
        price_one_time: 'R$ 1.497',
        price_sub_setup: 'R$ 497',
        price_sub_monthly: 'R$ 149/mês',
        features: [
          '3-5 páginas (Home, Sobre, Serviços, Contato, Blog)',
          'Design responsivo',
          '1 integração: WhatsApp',
          'Até 20 imagens',
          'SEO básico',
          'Google Analytics',
          'Certificado SSL',
        ],
        one_time_benefits: [
          'Código-fonte exportado',
          'Sem hospedagem/domínio/suporte',
          'Responsabilidade total do cliente',
        ],
        subscription_benefits: [
          'Hospedagem+domínio',
          '1 ajuste/semana',
          'Suporte (24-48h)',
          'Segurança, Backups',
          'Mínimo 3 meses',
        ],
        order: 1,
      },
      {
        name: 'MEDIUM',
        description: 'Site mais elaborado para PMEs em crescimento com funcionalidades avançadas.',
        price_one_time: 'R$ 2.497',
        price_sub_setup: 'R$ 997',
        price_sub_monthly: 'R$ 299/mês',
        features: [
          '5-10 páginas',
          'Supabase',
          '2 integrações',
          '50 fotos + 5 vídeos',
          'Lightbox, Newsletter',
          'Google Analytics, Chatbot básico',
          'Agendamento, SEO otimizado',
          'Domínio personalizado',
        ],
        one_time_benefits: ['Código-fonte exportado', 'Sem hospedagem/domínio/suporte'],
        subscription_benefits: [
          'Hospedagem+domínio',
          '2 ajustes/semana',
          'Suporte prioritário (12-24h)',
          'Backups diários, Relatórios',
          'Otimização SEO',
          'Mínimo 6 meses',
        ],
        order: 2,
      },
      {
        name: 'EXPERT',
        description:
          'Sistema complexo com IA e automações para empresas que precisam de inteligência artificial.',
        price_one_time: 'R$ 3.497',
        price_sub_setup: 'R$ 1.497',
        price_sub_monthly: 'R$ 499/mês',
        features: [
          '8-15 páginas',
          'Supabase Pro',
          '3 integrações',
          '100 fotos + 10 vídeos',
          'Chatbot IA (GPT-4)',
          'WhatsApp IA',
          'Dashboard, Autenticação',
          'API RESTful, Webhooks',
          'A/B testing, Domínio personalizado',
        ],
        one_time_benefits: ['Código-fonte exportado', 'Sem hospedagem/domínio/suporte'],
        subscription_benefits: [
          'Hospedagem+domínio',
          '3 ajustes/semana',
          'Suporte prioritário (12h)',
          'Manutenção IA, Monitoramento 24/7',
          'Treinamento mensal, Relatórios',
          'Mínimo 6 meses',
        ],
        order: 3,
      },
      {
        name: 'PREMIUM',
        description:
          'Sistema personalizado completo (ERP/CRM) para grandes empresas com automações avançadas.',
        price_one_time: 'R$ 4.497+',
        price_sub_setup: 'R$ 2.497',
        price_sub_monthly: 'R$ 799/mês',
        features: [
          '15+ páginas',
          'Supabase Enterprise',
          '5 integrações avançadas',
          'Ilimitado (fotos/vídeos/diagramas)',
          'CRM, Estoque, DRE, Gestão de alunos',
          'Agenda inteligente, Financeiro',
          'Nota fiscal, WhatsApp Business API',
          'IA preditiva, Auditoria',
        ],
        one_time_benefits: ['Código-fonte exportado', 'Treinamento inicial (10 pessoas)'],
        subscription_benefits: [
          'Hospedagem+domínio',
          '4 ajustes/semana',
          'Suporte 24/7 (4h)',
          'Gerente dedicado',
          'Backups hora em hora',
          'Monitoramento 24/7, Treinamento semanal',
          'Consultoria estratégica',
          'Mínimo 12 meses',
        ],
        order: 4,
      },
    ]

    for (const plan of plans) {
      try {
        app.findFirstRecordByData('plans', 'name', plan.name)
      } catch (_) {
        const record = new Record(col)
        record.set('name', plan.name)
        record.set('description', plan.description)
        record.set('price_one_time', plan.price_one_time)
        record.set('price_sub_setup', plan.price_sub_setup)
        record.set('price_sub_monthly', plan.price_sub_monthly)
        record.set('features', plan.features)
        record.set('one_time_benefits', plan.one_time_benefits)
        record.set('subscription_benefits', plan.subscription_benefits)
        record.set('order', plan.order)
        app.save(record)
      }
    }
  },
  (app) => {
    try {
      app.db().newQuery('DELETE FROM plans').execute()
    } catch (_) {}
  },
)
