migrate(
  (app) => {
    const updates = [
      { name: 'STARTER', price_sub_monthly: 'R$ 47,00/mês' },
      { name: 'MEDIUM', price_sub_monthly: 'R$ 97,00/mês' },
      { name: 'EXPERT', price_sub_monthly: 'R$ 147,00/mês' },
    ]

    for (const update of updates) {
      try {
        const plan = app.findFirstRecordByData('plans', 'name', update.name)
        const current = plan.getString('price_sub_monthly')
        if (current === update.price_sub_monthly) continue
        plan.set('price_sub_monthly', update.price_sub_monthly)
        app.save(plan)
      } catch (err) {
        console.log('Error updating ' + update.name + ' plan recurring price:', err)
      }
    }
  },
  (app) => {
    const previous = [
      { name: 'STARTER', price_sub_monthly: 'R$ 97,00/mês' },
      { name: 'MEDIUM', price_sub_monthly: 'R$ 147,00/mês' },
      { name: 'EXPERT', price_sub_monthly: 'R$ 197,00/mês' },
    ]

    for (const prev of previous) {
      try {
        const plan = app.findFirstRecordByData('plans', 'name', prev.name)
        plan.set('price_sub_monthly', prev.price_sub_monthly)
        app.save(plan)
      } catch (_) {}
    }
  },
)
