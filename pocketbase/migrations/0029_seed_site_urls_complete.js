migrate(
  (app) => {
    const updates = [
      {
        matchField: 'company',
        matchValue: 'Eleve Pilates',
        siteUrl: 'https://elevestudiopilates.goskip.app/',
      },
      {
        matchField: 'company',
        matchValue: 'Blessed',
        siteUrl: 'https://coachdavidfonseca.goskip.app/',
      },
      {
        matchField: 'company',
        matchValue: 'Stars Treinamento',
        siteUrl: 'https://starstreinamento.goskip.app/',
      },
      {
        matchField: 'company',
        matchValue: 'Acdomz',
        siteUrl: 'https://acdomzgc.goskip.app/',
      },
      {
        matchField: 'title',
        matchValue: 'LP Odontologia',
        siteUrl: 'https://draisabelabialy.goskip.app/',
      },
    ]

    for (const u of updates) {
      try {
        const record = app.findFirstRecordByData('projects', u.matchField, u.matchValue)
        record.set('site_url', u.siteUrl)
        app.save(record)
      } catch (_) {
        // project not found — skip
      }
    }

    // Also try to match LP Odontologia by company in case title differs
    try {
      const record = app.findFirstRecordByData('projects', 'company', 'LP Odontologia')
      record.set('site_url', 'https://draisabelabialy.goskip.app/')
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    // Down: clear site_url for the affected records
    const clearUrl = (field, value) => {
      try {
        const record = app.findFirstRecordByData('projects', field, value)
        record.set('site_url', '')
        app.save(record)
      } catch (_) {}
    }
    clearUrl('company', 'Eleve Pilates')
    clearUrl('company', 'Blessed')
    clearUrl('company', 'Stars Treinamento')
    clearUrl('company', 'Acdomz')
    clearUrl('title', 'LP Odontologia')
    clearUrl('company', 'LP Odontologia')
  },
)
