migrate(
  (app) => {
    const newFeatures = [
      '5 a 10 dobras responsivas',
      '10 fotos inclusas',
      'Botão flutuante de WhatsApp e FAQ',
      'até 2 integrações',
      'Domínio: nomesite.goskip.app',
      'SEO Avançado + Meta Descrição',
      'Certificado SSL e GitHub Export',
    ]

    try {
      const medium = app.findFirstRecordByData('plans', 'name', 'MEDIUM')
      const currentFeatures = medium.get('features') || []

      const alreadyApplied =
        Array.isArray(currentFeatures) &&
        currentFeatures.length === newFeatures.length &&
        currentFeatures.every((f, i) => f === newFeatures[i])

      if (alreadyApplied) return

      medium.set('features', newFeatures)
      app.save(medium)
    } catch (err) {
      console.log('Error updating MEDIUM plan features:', err)
    }
  },
  (app) => {
    const previousFeatures = [
      'Design responsivo (PC, Mobile, Tablet)',
      'Até 10 fotos + vídeos',
      'Galeria lightbox básica',
      'Chatbot básico',
      'SEO otimizado',
      'Integração com redes sociais',
      'Favicon personalizado',
      'Meta descrição para Google',
      'Exportação via GitHub',
      'Domínio .com ou .com.br personalizado',
      'Botão flutuante WhatsApp',
      'Botão redirecionamento email',
      'Até 2 integrações',
      'FAQ para quebra de objeções',
    ]

    try {
      const medium = app.findFirstRecordByData('plans', 'name', 'MEDIUM')
      medium.set('features', previousFeatures)
      app.save(medium)
    } catch (_) {}
  },
)
