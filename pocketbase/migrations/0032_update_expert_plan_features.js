migrate(
  (app) => {
    const newFeatures = [
      '10 dobras no site',
      'foto ilimitadas',
      'Botão flutuante de WhatsApp e FAQ',
      '3+ integrações',
      'Domínio .com ou .com.br (1 ano)',
      'Chatbot personalizado com IA',
      'integrações com infoprodutos de alta conversão',
      'SEO Avançado + Meta Descrição + Favicon',
      'Certificado SSL e GitHub Export',
    ]

    try {
      const expert = app.findFirstRecordByData('plans', 'name', 'EXPERT')
      const currentFeatures = expert.get('features') || []

      const alreadyApplied =
        Array.isArray(currentFeatures) &&
        currentFeatures.length === newFeatures.length &&
        currentFeatures.every((f, i) => f === newFeatures[i])

      if (alreadyApplied) return

      expert.set('features', newFeatures)
      app.save(expert)
    } catch (err) {
      console.log('Error updating EXPERT plan features:', err)
    }
  },
  (app) => {
    const previousFeatures = [
      '10 dobras no site',
      'foto ilimitadas',
      'Botão flutuante de WhatsApp e FAQ',
      '3+ integrações',
      'Domínio .com ou .com.br (1 ano)',
      'Chatbot personalizado com IA',
      'integrações com infoprodutos de alta conversão',
    ]

    try {
      const expert = app.findFirstRecordByData('plans', 'name', 'EXPERT')
      expert.set('features', previousFeatures)
      app.save(expert)
    } catch (_) {}
  },
)
