migrate(
  (app) => {
    try {
      const record = app.findRecordById('projects', 's3ipzbqyx91n0j1')
      // Clear the image field in the database.
      // The frontend will load the specific local asset for this project.
      record.set('image', null)
      app.save(record)
    } catch (e) {
      // Record might not exist in this environment, ignore
    }
  },
  (app) => {
    // No down migration needed
  },
)
