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
        docsBranch: 'main',
        editLinkText: 'Edite essa página no Github',
        lastUpdated: 'Última atualização',
        sidebar: [
            { title: "Guia", children: [
                "/main.md"
            ] },
            { title: "Desenvolvimento", children: [
                '/dev/', 
                '/dev/auth.md', 
                '/dev/erros.md',
                '/dev/favoritos.md',
                '/dev/listas.md',
                '/dev/produtos.md'
            ]} ,
        ],
        nav: [
            { text: 'Guia',             link: '/main.md' },
            { text: 'NetForce',         link: 'http://www.netforce.com.br' },
            { text: 'Fischer Têxtil',   link: 'https://www.fischertextil.com.br/' }
        ],
        footer: {
            contact: [
                { type: 'github',   link: 'https://github.com/gabrielwillemann/' },
                { type: 'twitter',  link: 'https://twitter.com/gabrielwilleman' }
            ],
        }
    }
 }