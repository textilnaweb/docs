# Listas de produtos

Busca no sistema por produtos através de listas de pordutos pré-definidas.
Abaixo temos algumas listas padrões que já estão disponíveis:

 - **busca** - Lista utilizada para realizar buscas na loja
 - **lancamentos** - Lista de produtos para exibir os produtos rescém lançados na loja
 - **ofertas** - Lista de produtos que estão com promoções/ofertas ativas
 - **historico_navegacao** - Lista de produtos do usuário ou tracker_token referênte a navegação pelos últimos produtos

## Retorna a lista de produtos

<api method="get" uri="/listas/{lid}" />

Retorna a lista de produtos marcados como favoritos do usuário.

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
