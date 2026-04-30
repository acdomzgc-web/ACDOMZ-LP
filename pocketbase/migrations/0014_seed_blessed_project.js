migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('projects')

    try {
      app.findFirstRecordByData('projects', 'title', 'LP Blessed')
      // Project already exists, idempotency check
      return
    } catch (_) {
      // Proceed to create
    }

    const record = new Record(collection)
    record.set('title', 'LP Blessed')
    record.set('company', 'Blessed')
    record.set('niche', 'Fitness')
    record.set(
      'description',
      'Blessed foi um site desenhado para atender as demandas de um personal trainer, coach de crossfit, local onde foram contados a historia do coach, suas conquistas, suas ambições, qual seu metodo de treinamento, foi colocado seus produtos da sua loja, seus cursos de fortalecimanto e seus outros serviços como (clinicas e mentorias para outros professores), um site mais do que completo para vender sua imagem e seus serviços de maneira profissional',
    )
    record.set(
      'features',
      'Design Exclusivo;Integração de Produtos e Cursos;Apresentação Profissional e História',
    )

    app.save(record)
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'title', 'LP Blessed')
      app.delete(record)
    } catch (_) {
      // Record does not exist, nothing to revert
    }
  },
)
