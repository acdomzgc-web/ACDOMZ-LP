migrate(
  (app) => {
    try {
      let record
      try {
        record = app.findFirstRecordByData('projects', 'title', 'LP Odontologia')
      } catch (_) {
        const records = app.findRecordsByFilter(
          'projects',
          "title ~ 'Odontologia' || niche ~ 'Odontologia'",
          '-created',
          1,
          0,
        )
        if (records && records.length > 0) {
          record = records[0]
        }
      }
      if (record) {
        record.set('image', null)
        app.save(record)
      }
    } catch (e) {}
  },
  (app) => {},
)
