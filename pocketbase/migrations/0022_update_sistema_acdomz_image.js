migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'title', 'Sistema gestão condominal')
      record.set('title', 'Sistema ACDOMZ')
      record.set('image', '')
      app.save(record)
    } catch (_) {
      try {
        const record2 = app.findFirstRecordByData('projects', 'title', 'Sistema ACDOMZ')
        record2.set('image', '')
        app.save(record2)
      } catch (_) {}
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('projects', 'title', 'Sistema ACDOMZ')
      record.set('title', 'Sistema gestão condominal')
      app.save(record)
    } catch (_) {}
  },
)
