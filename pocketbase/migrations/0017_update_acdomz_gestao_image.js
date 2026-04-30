migrate(
  (app) => {
    try {
      const record = app.findRecordById('projects', 'x9e7fvaiai6sdbd')
      // Clear the existing DB image so the frontend asset override works without conflicts
      record.set('image', '')
      app.save(record)
    } catch (err) {
      // Record might not exist
    }
  },
  (app) => {
    // Revert not possible without original file, do nothing
  },
)
