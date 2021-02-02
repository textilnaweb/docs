# Listas de produtos

Busca no sistema por listas de produtos, algumas listas padrões estão disponíveis:

 - busca
 - lancamentos
 - ofertas 
 - historico_navegacao

### Retorna a lista de produtos

<api method="get" uri="/listas/{lid}" />

Retorna a lista de produtos marcados como favoritos do usuário.

#### Requisição

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| lid        | ID da lista que será carregada <Badge text="obrigatório"/> |

Parâmetros query:

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| q          | Texto de busca para filotros os produtos      |
| s          | Qtdade de produtos por página. Padrão 20      |
| p          | Qual o indice da página                       |


#### Resposta

| atributo             | descrição                                                          |
|:---------------------|:-------------------------------------------------------------------|
| nome                 | ID da lista                                                        |
| titulo               | Título a ser exibido da lista                                      |
| ordenacao            | Ordem que os produtos serão exibidos                               |
| cols                 | Número de colunas que será exibido os produtos                     |
| count                | Quantidade de produtos encontrado com base no filtro sem paginação |
| produtos             | Lista de produtos encontrado. Ver [produto](/produto)              |
| exibir               | Sub objeto                                                         |
| exibir.barra_filtros | Flag que determina se deve exibir a barra de filtros               |
| exibir.ordenacao     | Flag que determina se deve exibir as opções de ordenação           |
