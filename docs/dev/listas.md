# Listas

O sistema foi implementado por controle de listas e é através delas que vocÊ pode carregar produtos, etiquetas, fabricas....

## Lista de produtos

<api method="get" uri="/listas/{lid}" />

Retorna a lista de produtos marcados como favoritos do usuário.

A busca no sistema por produtos, deve ser realizada através de listas de produtos pré-definidas.
Abaixo temos a listas padrões que já estão disponíveis:

 - **busca** - Lista utilizada para realizar buscas na loja
 - **lancamentos** - Lista de produtos para exibir os produtos rescém lançados na loja
 - **ofertas** - Lista de produtos que estão com promoções/ofertas ativas
 - **historico_navegacao** - Lista de produtos do usuário ou tracker_token referênte a navegação pelos últimos produtos


### Requisição

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| lid        | ID da lista que será carregada <Badge text="obrigatório"/> |

Parâmetros query:

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| q          | Texto de busca para filotros os produtos      |
| s          | Qtdade de produtos por página. Padrão 20      |
| p          | Qual o indice da página                       |


### Resposta

| atributo             | descrição                                                          |
|:---------------------|:-------------------------------------------------------------------|
| nome                 | ID da lista                                                        |
| titulo               | Título a ser exibido da lista                                      |
| ordenacao            | Ordem que os produtos serão exibidos                               |
| cols                 | Número de colunas que será exibido os produtos                     |
| count                | Quantidade de produtos encontrado com base no filtro sem paginação |
| produtos             | Lista de produtos encontrado. [Ver produto](/dev/produtos.html) |
| exibir               | Sub objeto                                                         |
| exibir.barra_filtros | Flag que determina se deve exibir a barra de filtros               |
| exibir.ordenacao     | Flag que determina se deve exibir as opções de ordenação           |

## Lista de etiquetas/marcas

<api method="get" uri="/listas/etiquetas" />

Retorna a lista de etiquetas/marcas das fábricas com produtos ativos na loja.

### Requisição

Nenhum parâmetro precisa ser passado


### Resposta

Lista de etiquetas

| atributo             | descrição                                                          |
|:---------------------|:-------------------------------------------------------------------|
| id                   | ID da etiqueta                                                     |
| nome                 | Nome da descritivo da etiqueta                                     |
| slug                 | Slug para ser utilizado nas rotas                                  |
| logos                | Sub objeto                                                         |
| logos.fabrica        | URI da logo da fábrica                                             |
| logos.etiqueta       | URI da logo da etiqueta específica                                 |