migrate(
  (app) => {
    app
      .db()
      .newQuery(
        "UPDATE testimonials SET avatar = 'src/assets/isa-insta-ff725.jpg' WHERE name = 'Dra. Isabela Bialy'",
      )
      .execute()
  },
  (app) => {
    app
      .db()
      .newQuery("UPDATE testimonials SET avatar = '' WHERE name = 'Dra. Isabela Bialy'")
      .execute()
  },
)
