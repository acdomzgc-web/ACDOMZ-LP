migrate(
  (app) => {
    // Use raw SQL to bypass application-level file validation constraints,
    // as the file is a frontend local asset rather than a PocketBase uploaded file.
    app
      .db()
      .newQuery(
        "UPDATE projects SET image = 'src/assets/image-5d08c.png' WHERE id = 'pflloppi7kowfjz'",
      )
      .execute()
  },
  (app) => {
    app.db().newQuery("UPDATE projects SET image = '' WHERE id = 'pflloppi7kowfjz'").execute()
  },
)
