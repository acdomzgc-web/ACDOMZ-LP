migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'company', 'Stars Treinamento')
      record.set('image', 'src/assets/image-216eb.png')
      app.save(record)
    } catch (_) {
      console.log("Project 'Stars Treinamento' not found, skipping image update.")
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'company', 'Stars Treinamento')
      if (record.getString('image') === 'src/assets/image-216eb.png') {
        record.set('image', '')
        app.save(record)
      }
    } catch (_) {}
  },
)
