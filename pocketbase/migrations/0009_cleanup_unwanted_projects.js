migrate(
  (app) => {
    try {
      const records = app.findRecordsByFilter(
        'projects',
        "title = 'Plataforma de Alta Conversão' || title = 'Sistema de Agendamento'",
        '',
        100,
        0,
      )
      for (const record of records) {
        app.delete(record)
      }
    } catch (err) {
      // Gracefully handle if no matching records are found or collection is missing
    }
  },
  (app) => {
    // Irreversible migration — deleted records cannot be recovered without their original data
  },
)
