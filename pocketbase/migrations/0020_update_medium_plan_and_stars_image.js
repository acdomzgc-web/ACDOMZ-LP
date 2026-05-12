migrate(
  (app) => {
    // Update Plan
    try {
      const plans = app.findRecordsByFilter('plans', "name ~ 'MEDIUM'")
      for (let i = 0; i < plans.length; i++) {
        const plan = plans[i]
        let updated = false

        const features = plan.get('features') || []
        if (Array.isArray(features)) {
          const newFeatures = features.filter((f) => f !== 'Card de preço resumido')
          if (newFeatures.length !== features.length) {
            plan.set('features', newFeatures)
            updated = true
          }
        }

        const subBenefits = plan.get('subscription_benefits') || []
        if (Array.isArray(subBenefits)) {
          const newSubBenefits = subBenefits.filter((f) => f !== 'Card de preço resumido')
          if (newSubBenefits.length !== subBenefits.length) {
            plan.set('subscription_benefits', newSubBenefits)
            updated = true
          }
        }

        if (updated) {
          app.save(plan)
        }
      }
    } catch (err) {
      console.log('Error updating medium plan:', err)
    }

    // Update Project
    try {
      const projects = app.findRecordsByFilter(
        'projects',
        "title = 'LP Stars Treinamento' || company = 'Stars Treinamento'",
      )
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i]
        project.set('image', null)
        app.save(project)
      }
    } catch (err) {
      console.log('Error updating stars project:', err)
    }
  },
  (app) => {
    // Down migration
    try {
      const plans = app.findRecordsByFilter('plans', "name ~ 'MEDIUM'")
      for (let i = 0; i < plans.length; i++) {
        const plan = plans[i]
        let updated = false

        const features = plan.get('features') || []
        if (Array.isArray(features) && !features.includes('Card de preço resumido')) {
          features.push('Card de preço resumido')
          plan.set('features', features)
          updated = true
        }

        if (updated) {
          app.save(plan)
        }
      }
    } catch (err) {
      console.log('Error reverting medium plan:', err)
    }
  },
)
