# Listas

O sistema foi implementado por controle de listas e é através delas que vocÊ pode carregar produtos, etiquetas, fabricas....

## Lista de produtos

<api method="get" uri="/listas/produtos" />

Retorna a lista de produtos conforme os filtros, ordenação e paginação.


### Requisição


Parâmetros query:

| query          | descrição                                                                                                                    |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------|
| q              | Texto de busca para filtrar os produtos                                                                                      |
| p              | Qual o indice da página                                                                                                      |
| qtd            | Qtdade de produtos por página. Padrão 20                                                                                     |
| ordem          | Qual a classificação de ordenação. `menor_preco`, `maior_preco`, `ofertas`, `lancamentos`, `mais_vendidos`, `mais_populares` |
| filtros        | Lista de filtro pré-definidos                                                                                                |
| marcas        | Lista de etiquetas (slug)                                                                                                    |
| departamentos | Lista de departamentos (slug)                                                                                                |
| sessao_id      | Token da sessao do usuário no front-end. Para ser usando na lista de histórico de vanegação por exemplo                      |

> As listas, de marcas, departamentos, filtros, pode ser informado um único item ou uma lista separada por vírgula.

<tag text="auth" type="error"/> Quando executado sobre um `access_token`, alguns filtros do usuáiro logado são aplicados.


#### Pré filtros
A busca no sistema por produtos, pode ser realizada através de filtros de produtos pré-definidas.
Abaixo temos os filtros padrões que já estão disponíveis:

 - **lancamentos** - Lista de produtos para exibir os produtos rescém lançados na loja.
 - **ofertas** - Lista de produtos que estão com promoções/ofertas ativas.
 - **historico_navegacao** - Lista de produtos do usuário ou tracker_token referênte a navegação pelos últimos produtos.
 - **favoritos** - Lista de produtos marcados como favoritos para o usuário logado.


### Resposta

| atributo             | descrição                                                          |
|:---------------------|:-------------------------------------------------------------------|
| count                | Quantidade de produtos encontrado com base no filtro sem paginação |
| produtos             | Lista de produtos encontrado. [Ver produto](/dev/produtos.html)    |

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
| nome                 | Nome descritivo da etiqueta                                        |
| slug                 | Slug para ser utilizado nas rotas                                  |
| logos                | Sub objeto                                                         |
| logos.fabrica        | URI da logo da fábrica                                             |
| logos.etiqueta       | URI da logo da etiqueta específica                                 |

## Lista de departamentos

<api method="get" uri="/listas/departamentos" />

Retorna a lista de departamentos ativos na loja.

### Requisição

Nenhum parâmetro precisa ser passado


### Resposta

Lista de departamentos

| atributo             | descrição                                                          |
|:---------------------|:-------------------------------------------------------------------|
| id                   | ID do departamento                                                 |
| nome                 | Nome descritivo do departamento                                    |
| slug                 | Slug para ser utilizado nas rotas                                  |
| logo                 | URI da logo do departamento                                        |