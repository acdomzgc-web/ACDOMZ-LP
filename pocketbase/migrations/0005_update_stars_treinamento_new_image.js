migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'title', 'Stars Treinamento')
      record.set('image', 'src/assets/image-216eb-40f3d.png')
      app.saveNoValidate(record)
    } catch (_) {
      // record does not exist
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'title', 'Stars Treinamento')
      record.set('image', 'src/assets/image-216eb.png')
      app.saveNoValidate(record)
    } catch (_) {
      // record does not exist
    }
  },
)
