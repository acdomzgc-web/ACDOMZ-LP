migrate(
  (app) => {
    const collection = new Collection({
      name: 'plans',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'price_one_time', type: 'text', required: true },
        { name: 'price_sub_setup', type: 'text', required: true },
        { name: 'price_sub_monthly', type: 'text', required: true },
        { name: 'features', type: 'json', required: true },
        { name: 'one_time_benefits', type: 'json', required: true },
        { name: 'subscription_benefits', type: 'json', required: true },
        { name: 'order', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('plans')
    app.delete(collection)
  },
)
