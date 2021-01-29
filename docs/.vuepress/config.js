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
            '/',
            '/api'
        ],
        nav: [
            { text: 'Guia',     link: '/main.md' },
            { text: 'Github',   link: 'https://github.com/textilnaweb/docs' }
        ],
        footer: {
            contact: [
                { type: 'github',   link: 'https://github.com/gabrielwillemann/' },
                { type: 'twitter',  link: 'https://twitter.com/gabrielwilleman' }
            ],
        }
    }
 }