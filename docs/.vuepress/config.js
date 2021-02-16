module.exports = {
    title: 'Têxtil na Web',
    description: 'Documentação e helpers do portal Têxtil na Web.',
    head: [
        ['link', { rel: "shortcut icon", href: "https://static.textilnaweb.com/imgs/favicon.png"}],
    ],
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
                '/dev/novo_usuario.md',
                '/dev/auth.md', 
                '/dev/erros.md',
                '/dev/favoritos.md',
                '/dev/listas.md',
                '/dev/produtos.md',
                '/dev/carrinhos.md',
                '/dev/banners.md',
                '/dev/utils.html'
            ]} ,
        ],
        nav: [
            { text: 'Guia',             link: '/main.md' },
            { text: 'NetForce',         link: 'http://www.netforce.com.br' },
            { text: 'Fischer Têxtil',   link: 'https://www.fischertextil.com.br/' }
        ]
    }
 }
