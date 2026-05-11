migrate(
  (app) => {
    try {
      const medium = app.findFirstRecordByData('plans', 'name', 'Medium')
      medium.set('features', [
        'Design responsivo (PC, Mobile, Tablet)',
        'Até 10 fotos + vídeos',
        'Galeria lightbox básica',
        'Chatbot básico',
        'SEO otimizado',
        'Integração com redes sociais',
        'Favicon personalizado',
        'Meta descrição para Google',
        'Exportação via GitHub',
        'Domínio .com ou .com.br personalizado',
        'Botão flutuante WhatsApp',
        'Botão redirecionamento email',
        'Até 2 integrações',
        'FAQ para quebra de objeções',
      ])
      app.save(medium)
    } catch (_) {}

    try {
      const expert = app.findFirstRecordByData('plans', 'name', 'Expert')
      expert.set('features', [
        '8 a 15 páginas',
        'Design responsivo (PC, Mobile, Tablet)',
        'Até 20+ fotos + vídeos',
        'Banco de dados dedicado (Supabase Pro)',
        'Chatbot com IA (GPT-4 ou Claude)',
        'Botão WhatsApp com mensagem automática pré-formatada',
        'Vitrine de produtos/cursos/ebooks/mentorias',
        'Integração com pagamentos (Stripe, Mercado Pago)',
        'Dashboards e gráficos',
        'Favicon personalizado',
        'SEO avançado',
        'Meta descrição para Google',
        'Exportação via GitHub',
        'Domínio .com ou .com.br personalizado',
        'Botão flutuante WhatsApp',
        'Botão redirecionamento email',
        'Até 3 integrações avançadas',
        'FAQ para quebra de objeções',
        'API para integrações',
        'Análise de comportamento',
      ])
      app.save(expert)
    } catch (_) {}
  },
  (app) => {},
)
