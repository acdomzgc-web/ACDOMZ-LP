migrate(
  (app) => {
    // Delete outdated projects
    app
      .db()
      .newQuery(`
    DELETE FROM projects 
    WHERE title IN ('Plataforma de Alta Conversão', 'Sistema de Agendamento')
  `)
      .execute()

    // Clear the image field for specific projects if they have legacy string paths
    // Legacy paths contain "/", while PocketBase file names do not
    app
      .db()
      .newQuery(`
    UPDATE projects 
    SET image = '' 
    WHERE title IN ('Acdomz', 'Eleve Pilates', 'Stars Treinamento') 
      AND image LIKE '%/%'
  `)
      .execute()
  },
  (app) => {
    // Empty revert function since data deletion is generally non-reversible in migrations
  },
)
