module.exports = {
    title: 'Têxtil na Web',
    description: 'Documentação e helpers do portal Têxtil na Web.',
    locales: {
        '/': {
            lang: 'pt-BR',
        },
    },
    themeConfig: {
        repo: 'textilnaweb/docs',
        docsDir: 'docs',
        editLinks: true,
        sidebar: [
            { title: "Guia", children: ["/main.md"] },
            { title: "Desenvolvimento", children: ['/dev/', '/dev/auth.md', '/dev/erros.md'] }
        ],
        nav: [
            { text: 'Guia',     link: '/main.md' },
            { text: 'Netforce',   link: 'http://www.netforce.com.br' }
        ],
        footer: {
            contact: [
                { type: 'github',   link: 'https://github.com/gabrielwillemann/' },
                { type: 'twitter',  link: 'https://twitter.com/gabrielwilleman' }
            ],
        }
    }
 }