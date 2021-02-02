# Detalhe do produto

Carregar informações detalhadas de um produto específico.

### Carregar produto

<api method="get" uri="/produtos/{pid}" />

Carregar o detalhe de um produto.

#### Requisição

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| pid        | ID do produto <Badge text="obrigatório"/> |


#### Resposta

Detalhe do produto:

Exemplo:

```json
{
  "id": "1169e34fd5044ec9bc5b15b7a5ad28a9",
  "codigo": "19.3005",
  "nome": "BERMUDA",
  "slug": "bermuda",
  "descricao": "BERMUDA P NA AREIA C/ BOLSO E CADARO SUBLIMADA",
  "tags": [
    "destaque",
    "verao"
  ],
  "valor": "28.70000",
  "info_tecnicas": null,
  "disponivel": 1,
  "cores": {
    "sortidas": true,
    "opcoes": [ "branco","preto" ]
  },
  "grades": {
    "tamanhos": ["1","2","3" ],
    "aberta": true,
    "opcoes": ["1","1","1"]
  },
  "promocao": {
    "habilitado": true,
    "valor": "9.35000",
    "diff_valor": 19.35,
    "percent_off": 67.42
  },
  "frete": {
    "cif": "all"
  },
  "fabrica": {
    "id": "87a32c8838a245dca4451e670baa43b4",
    "nome": "Fabrica",
    "slug": "fabrica",
    "logo_url": "https://www.renataabranchs.com.br/wp-content/uploads/2018/11/ReA-logos-hering.jpg"
  },
  "etiqueta": {
    "id": "604d5e73bbe04aaeb6171940ad94031b",
    "nome": "marca",
    "slug": "fabrica/marca",
    "logo_url": "https://logodownload.org/wp-content/uploads/2020/01/dzarm-logo.png"
  },
  "colecao": {
    "id": "9a5520b205d843b68f626fb1c3bf5cdd",
    "nome": "Coleção modelo verão",
    "slug": "colecao_modelo_verao"
  },
  "parcelamento": {
    "parcelas_qtd": 4,
    "juros": false
  },
  "fotos": []
}
```