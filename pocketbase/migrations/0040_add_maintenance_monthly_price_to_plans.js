migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('plans')

    if (!col.fields.getByName('maintenance_monthly_price')) {
      col.fields.add(new TextField({ name: 'maintenance_monthly_price' }))
    }

    app.save(col)

    const maintenanceValues = {
      STARTER: 'R$ 47/mês',
      MEDIUM: 'R$ 67/mês',
      EXPERT: 'R$ 87/mês',
      PREMIUM: 'R$ 97/mês',
    }

    for (const [planName, price] of Object.entries(maintenanceValues)) {
      try {
        const record = app.findFirstRecordByData('plans', 'name', planName)
        record.set('maintenance_monthly_price', price)
        app.save(record)
      } catch (_) {
        app
          .db()
          .newQuery('UPDATE plans SET maintenance_monthly_price = {:price} WHERE name = {:name}')
          .bind({ price, name: planName })
          .execute()
      }
    }
  },
  (app) => {
    const col = app.findCollectionByNameOrId('plans')
    if (col.fields.getByName('maintenance_monthly_price')) {
      col.fields.removeByName('maintenance_monthly_price')
    }
    app.save(col)
  },
)
