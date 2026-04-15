migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByFilter(
        'projects',
        "title ~ 'Acdomz' || company ~ 'Acdomz'",
      )
      record.set('image', 'src/assets/image-2b7fc.png')
      app.save(record)
    } catch (err) {
      console.log('Acdomz project not found to update image.')
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByFilter('projects', "image = 'src/assets/image-2b7fc.png'")
      record.set('image', '')
      app.save(record)
    } catch (err) {
      console.log('Acdomz project not found to rollback image.')
    }
  },
)
