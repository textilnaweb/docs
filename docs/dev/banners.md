# Banners


<api method="get" uri="/banners/{categoria}" />

Controle de banners da loja.

### Requisição

| parametro  | descrição                                                      |
|:-----------|:---------------------------------------------------------------|
| categoria  | ID da categoria/coleção de banners <Badge text="obrigatório"/> |

Algumas categorias do projeto:

 - **mini** - banners estreitos
 - **home** - banners para o carrosel da home


### Resposta

Lista de banners da **categoria**

Exemplo:

```json
[
  {
    "imagem": "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/banners/home/verao-homens.png",
    "id": "7cf09f957a024cfdbfb79799b0cbbafe",
    "nome": "Verão Homens",
    "slug": "verao-homens",
    "link": "#versao-homens"
  },
  {
    "imagem": "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/banners/home/kits-infantis.png",
    "id": "4256a488d3124f5fba56016b80c95990",
    "nome": "Kits Infantis",
    "slug": "kits-infantis",
    "link": "#kits-infantis"
  },
  {
    "imagem": "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/banners/home/moletons-masculinos.png",
    "id": "018591f3141a4d039479894b0127ac00",
    "nome": "Moletons masculinos",
    "slug": "moletons-masculinos",
    "link": "#moletons-masculinos"
  }
]
```