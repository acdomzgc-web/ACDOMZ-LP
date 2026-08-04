migrate(
  (app) => {
    // Update EXPERT plan features with exact 7 items
    try {
      const expert = app.findFirstRecordByData('plans', 'name', 'EXPERT')
      expert.set('features', [
        '10 dobras no site',
        'foto ilimitadas',
        'Botão flutuante de WhatsApp e FAQ',
        '3+ integrações',
        'Domínio .com ou .com.br (1 ano)',
        'Chatbot personalizado com IA',
        'integrações com infoprodutos de alta conversão',
      ])
      app.save(expert)
    } catch (err) {
      console.log('Error updating EXPERT plan:', err)
    }

    // Update MEDIUM plan: remove "+ galeria de vídeos" from any feature item
    try {
      const medium = app.findFirstRecordByData('plans', 'name', 'MEDIUM')
      const features = medium.get('features') || []
      if (Array.isArray(features)) {
        const updatedFeatures = features.map((f) => {
          if (typeof f === 'string' && f.includes('+ galeria de vídeos')) {
            return f.replace(/\s*\+\s*galeria de vídeos/g, '').trim()
          }
          return f
        })
        medium.set('features', updatedFeatures)
        app.save(medium)
      }
    } catch (err) {
      console.log('Error updating MEDIUM plan:', err)
    }
  },
  (app) => {
    // Down migration: restore previous EXPERT features from migration 0019
    try {
      const expert = app.findFirstRecordByData('plans', 'name', 'EXPERT')
      expert.set('features', [
        '8 a 15 páginas',
        'Design responsivo (PC, Mobile, Tablet)',
        'Até 20+ fotos + vídeos',
        'Banco de dados dedicado (Supabase Pro)',
        'Chatbot com IA (GPT-4 ou Claude)',
        'Botão WhatsApp com mensagem automática pré-formatada',
        'Vitrine de produtos/cursos/ebooks/mentorias',
        'Integração com pagamentos (Stripe, Mercado Pago)',
        'Dashboards e gráficos',
        'Favicon personalizado',
        'SEO avançado',
        'Meta descrição para Google',
        'Exportação via GitHub',
        'Domínio .com ou .com.br personalizado',
        'Botão flutuante WhatsApp',
        'Botão redirecionamento email',
        'Até 3 integrações avançadas',
        'FAQ para quebra de objeções',
        'API para integrações',
        'Análise de comportamento',
      ])
      app.save(expert)
    } catch (_) {}

    // Re-add "+ galeria de vídeos" to MEDIUM's second feature if it had it
    try {
      const medium = app.findFirstRecordByData('plans', 'name', 'MEDIUM')
      const features = medium.get('features') || []
      if (Array.isArray(features) && features.length >= 2) {
        const second = features[1]
        if (typeof second === 'string' && second.includes('Até 10 fotos + vídeos')) {
          features[1] = 'Até 10 fotos + vídeos + galeria de vídeos'
          medium.set('features', features)
          app.save(medium)
        }
      }
    } catch (_) {}
  },
)
