migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('plans', 'name', 'PREMIUM')
      record.set('price_one_time', 'R$ 4.997,00')
      app.save(record)
    } catch (e) {
      // If not found by name, fallback to raw SQL query
      app
        .db()
        .newQuery("UPDATE plans SET price_one_time = 'R$ 4.997,00' WHERE name = 'PREMIUM'")
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('plans', 'name', 'PREMIUM')
      record.set('price_one_time', 'R$ 6.997,00')
      app.save(record)
    } catch (e) {
      app
        .db()
        .newQuery("UPDATE plans SET price_one_time = 'R$ 6.997,00' WHERE name = 'PREMIUM'")
        .execute()
    }
  },
)
