# Produto

Ações de um produto específico.

## Carregar produto

<api method="get" uri="/produtos/{pid}" />

Carregar informações detalhadas de um produto específico.

### Requisição

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| pid        | ID do produto <Badge text="obrigatório"/>     |

Parâmetros query:

| header     | descrição                                               |
|:-----------|:--------------------------------------------------------|
| sessao_id  | ID da sessao para ser registrado nos produtos visitados |

> Você pode ver detalhes do token de sessão [aqui](/dev/carrinhos.html#tokens-de-sessao)

### Resposta

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
  "valor_modo": "avista",
  "info_tecnicas": null,
  "disponivel": 1,
  "tempo_escassez": "2022-05-23T22:00:00.000Z",
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
    "logo_url": "https://logodownload.org/wp-content/uploads/2020/01/dzarm-logo.png",
    "etiqueta_fabrica": false
  },
  "colecao": {
    "id": "9a5520b205d843b68f626fb1c3bf5cdd",
    "nome": "Coleção modelo verão",
    "slug": "colecao_modelo_verao",
    "cores": {
        "preto": {
            "hex": "#000000",
            "img_url": ""
        },
        "branco": {
            "hex": "#ffffff",
            "img_url": ""
        }
    },
    "pedido": {
        "val_ped_min": 2000.00,
        "val_parc_min": 500.00,
        "prazo_medio_fat": 90
    }
  },
  "parcelamento": {
    "parcelas_qtd": 4,
    "juros": false
  },
  "fotos": []
}
```

> O flag **etiqueta.etiqueca_fabrica** determina se a etiqueta é a própria marca da fabrica. Para evitar logo duplicada.


## Registrar interesse do usuário

<api method="post" uri="/produtos/{pid}/interessado" />

Registrar interesse do usuário pelo produto específico para que a plataforma avise quando novamente estiver o produto disponível.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| pid        | ID do produto <Badge text="obrigatório"/>     |


### Resposta

Resposta do registro do interesse:

Exemplo:

```json
{
  "status": true,
  "interesse_id": "e58f7e2d5ad04d0f92ef55c4d11e140b",
  "reinteresse": false
}
```
