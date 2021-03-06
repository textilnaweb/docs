# Pedidos

No acompanhamento dos pedidos realizados o usuário poderá verificar os pedidos que estão em andamento (abertos) e os pedidos já finalizaos (fechados).

## Situações do pedido

| situações | descrição                          |
|:---------:|:-----------------------------------|
| pre       | Pré-Pedido: Ainda não é pedido     |
| agc       | Aguardando Confirmação da Fábrica  |
| agf       | Aguardando Faturamento             |
| age       | Aguardando Entrega                 |
| con       | Concluído / Entrega                |
| can       | Cancelado                          |


## Listar pedidos

<api method="get" uri="/pedidos" />

Retorna a lista de pedidos aberos e fechados quye estão associados ao usuáiro logado.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

Lista de pedidos

Exemplo: 

```json
[
[
  {
    "id": "f240b035a8134e51804f97994c5414a9",
    "numero": "210226873200",
    "situacao": "pre",
    "cliente": {},
    "fabrica": {
      "fuso": -3,
      "logo": "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/logos/fabrica.png",
      "id": "b8c2ac28245b4579bb149806070bdde8",
      "nome": "Fabrica Modelo Ltda",
      "nome_fantasia": "Fabrica",
      "slug": "fabrica",
      "cnpj": "33468326000105",
      "ie": "isento",
      "im": "isento",
      "data_fundacao": null,
      "email": "contato@fabrica.com.br",
      "email_fin": null,
      "email_nfe": null,
      "email_ped": null,
      "ddd": null,
      "telefone_com": null,
      "telefone_cel": null,
      "situacao": "atv",
      "ultima_venda": null,
      "created_at": "2021-02-15T19:52:30.000Z",
      "updated_at": "2021-02-15T19:52:30.000Z"
    },
    "colecao": {
      "valor_ped_min": 100,
      "valor_parcela_min": 100,
      "id": "94c2904ec35b4394977a91de6c24f580",
      "fabrica_id": "b8c2ac28245b4579bb149806070bdde8",
      "etiqueta_id": "194ee2f85d5b4dacaf8f9804fd5eee6b",
      "nome": "Coleção modelo verão",
      "slug": "fabrica-colecao-modelo-verao",
      "prazo_medio_fat": 30,
      "qtdade_produzida_mes": 1000,
      "vig_venda_ini": "2020-01-01",
      "vig_venda_fim": "2021-12-31",
      "tabela_cores": "[{\"nome\":\"preto\",\"hex\":\"#000000\"},{\"nome\":\"branco\",\"hex\":\"#FFFFFF\"},{\"nome\":\"vemelho\",\"hex\":\"#FF0000\"}]",
      "created_at": "2021-02-15T19:59:27.000Z",
      "updated_at": "2021-02-15T19:59:27.000Z"
    },
    "etiqueta": {
      "logo": "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/logos/fabrica-marca.png",
      "id": "194ee2f85d5b4dacaf8f9804fd5eee6b",
      "fabrica_id": "b8c2ac28245b4579bb149806070bdde8",
      "nome": "marca",
      "slug": "fabrica-marca",
      "created_at": "2021-02-15T19:52:33.000Z",
      "updated_at": "2021-02-15T19:52:33.000Z"
    },
    "qtdade_total": 9,
    "valor_itens": 341.91,
    "valor_total": 341.91,
    "data_pedido": null,
    "data_prev_faturamento": "2021-02-26T17:51:22.000Z",
    "data_cancelamento": null,
    "etapas": [
      {
        "legenda": "pedido",
        "data": null
      },
      {
        "legenda": "aprovacao",
        "data": null
      },
      {
        "legenda": "faturamento",
        "data": null
      },
      {
        "legenda": "entrega",
        "data": null
      }
    ],
    "itens": [
      {
        "produto": {
          "id": "f61dc83cbc0d42d4bdd9b6a003b96999",
          "codigo": "5011",
          "nome": "CONJ. CAMISETA + BERMUDA",
          "descricao": "CONJ DESRUPTION CAMISETA + BERMUDA C/ BOLSO",
          "slug": "conj-camiseta-bermuda-5011",
          "tags": "destaque,verao",
          "fotos": [
            "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/produtos/fabrica-colecao-modelo-verao/5011.jpg"
          ]
        },
        "valor": 37.99,
        "qtdade": 9,
        "valor_total": 341.91,
        "qtdades": {
          "branco": {
            "p": 2,
            "m": 2,
            "g": 2
          },
          "preto": {
            "p": 1,
            "m": 1,
            "g": 1
          }
        }
      }
    ]
  }
]]
```