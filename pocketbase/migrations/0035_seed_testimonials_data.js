migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('testimonials')

    const testimonials = [
      {
        name: 'Clara Freitas',
        role: 'CEO da Eleve Pilates e Performance',
        content:
          'A entrega do site foi surpreendentemente rápida e totalmente personalizada, refletindo com precisão as necessidades e a identidade do studio. Com isso, nosso fluxo se tornou muito mais organizado e ágil, simplificando processos, otimizando o tempo da equipe e proporcionando uma experiência mais prática, fluida e profissional para nossos clientes.',
        order: 1,
      },
      {
        name: 'David Fonseca',
        role: 'CEO da Blessed',
        content:
          'A direção do Carlos Eduardo na criação do meu site profissional foi fundamental. Eu tinha um plano na cabeça, mas não sabia como sair do zero pra chegar no que tinha planejando. E no fim das contas nossa conversa foi tal clara e simples que ele conseguiu captar exatamente o que eu queria expor no site, só que de uma maneira muito mais elegante e profissional, algo que eu jamais faria sozinho ou com alguém que não tivesse a sensibilidade e cuidado que ele teve. Sempre muito cuidadoso em entender exatamente o que eu queria passar através de cada detalhe da página, desde as cores até um texto sobre meu trabalho.',
        order: 2,
      },
      {
        name: 'Dra. Isabela Bialy',
        role: 'Empresária Odontologia Digital',
        content:
          'Quero registrar meu sincero agradecimento ao Carlos Eduardo pelo trabalho excepcional realizado na criação do meu site. O resultado final traduz exatamente a imagem que eu desejava transmitir: um site elegante, sofisticado e alinhado à minha identidade profissional. Minha satisfação é imensa, e tenho plena convicção de que a qualidade do seu trabalho fará diferença para todos que tiverem a oportunidade de conhecê-lo.',
        order: 3,
      },
    ]

    for (const item of testimonials) {
      try {
        app.findFirstRecordByData('testimonials', 'name', item.name)
      } catch (_) {
        const record = new Record(col)
        record.set('name', item.name)
        record.set('role', item.role)
        record.set('content', item.content)
        record.set('order', item.order)
        app.save(record)
      }
    }
  },
  (app) => {
    try {
      app.db().newQuery('DELETE FROM testimonials').execute()
    } catch (_) {}
  },
)
