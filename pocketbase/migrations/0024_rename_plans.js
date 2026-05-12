migrate(
  (app) => {
    const plansToUpdate = [
      { oldName: 'SETUP 1', newName: 'STARTER' },
      { oldName: 'SETUP 2', newName: 'MEDIUM' },
      { oldName: 'SETUP 3', newName: 'EXPERT' },
    ]

    plansToUpdate.forEach(({ oldName, newName }) => {
      try {
        const record = app.findFirstRecordByData('plans', 'name', oldName)
        record.set('name', newName)
        app.save(record)
      } catch (_) {
        // Plan might already be updated, ignore
      }
    })
  },
  (app) => {
    const plansToUpdate = [
      { oldName: 'STARTER', newName: 'SETUP 1' },
      { oldName: 'MEDIUM', newName: 'SETUP 2' },
      { oldName: 'EXPERT', newName: 'SETUP 3' },
    ]

    plansToUpdate.forEach(({ oldName, newName }) => {
      try {
        const record = app.findFirstRecordByData('plans', 'name', oldName)
        record.set('name', newName)
        app.save(record)
      } catch (_) {
        // Plan might already be updated, ignore
      }
    })
  },
)
