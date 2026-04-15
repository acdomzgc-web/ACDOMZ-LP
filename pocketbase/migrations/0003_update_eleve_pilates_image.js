migrate(
  (app) => {
    app
      .db()
      .newQuery(
        "UPDATE projects SET image = 'src/assets/image-73d8e.png' WHERE title = 'Site Eleve Pilates'",
      )
      .execute()
  },
  (app) => {
    app
      .db()
      .newQuery(
        "UPDATE projects SET image = '' WHERE title = 'Site Eleve Pilates' AND image = 'src/assets/image-73d8e.png'",
      )
      .execute()
  },
)
