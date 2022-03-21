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

Parâmetros query:

| query          | descrição                                                                                                                    |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------|
| q              | Texto de busca para filtrar os produtos                                                                                      |
| p              | Qual o indice da página                                                                                                      |
| qtd            | Qtdade de produtos por página. Padrão 20                                                                                     |

### Resposta

Lista de pedidos

Exemplo: 

```json
{
  "count": 1,
  "page": 0,
  "recspage": 20,
  "pedidos": [
    {
      "id": "c5fe593bde514d0c95b9970ce7220687",
      "numero": "210505424300",
      "situacao": "con",
      "cond_pagto": {
        "id": "4290e43ac00f472c9dc31e7284298335",
        "codigo": "001",
        "nome": "30 dias",
        "prazo_medio": 30,
        "qtd_parcelas": 1,
        "created_at": "2021-05-05T14:03:18.000Z",
        "updated_at": "2021-05-05T14:03:18.000Z"
      },
      "cliente": {
        "id": "bc3ffb08088e4efea5007bcdbfb794ec",
        "usuario_id": "fb939d05de4e47cfab2dc58c4271c66d",
        "cnpj": "08729008000103",
        "nome_fantasia": "NetForce",
        "ie": "",
        "im": "",
        "data_fundacao": "2007-04-01",
        "email_fin": "financeiro@gmail.com",
        "email_nfe": "financeiro@gmail.com",
        "ddd": "47",
        "telefone_com": "992624953",
        "telefone_cel": "988044953",
        "ultima_compra": null,
        "created_at": "2021-02-16T03:47:47.000Z",
        "updated_at": "2021-04-13T12:01:22.000Z",
        "usuario": {
          "fuso": -3,
          "id": "fb939d05de4e47cfab2dc58c4271c66d",
          "nome": "NetForce Sistemas",
          "apelido": "NetForce",
          "email": "financeiro@gmail.com",
          "situacao": "atv",
          "lang": "pt_br",
          "ultimo_login": "2021-02-17T06:59:08.000Z",
          "ultimo_senha": "2021-02-22T19:11:00.000Z",
          "created_at": "2021-02-16T03:47:47.000Z",
          "updated_at": "2021-04-28T17:23:02.000Z"
        },
        "endereco": {
          "id": "cab9d837ebdc4107b4ba5fc378ab033e",
          "fabrica_id": null,
          "cliente_id": "bc3ffb08088e4efea5007bcdbfb794ec",
          "cep": "89000100",
          "logradouro": "Rua Centro",
          "numero": "293",
          "complemento": "Casa 2",
          "bairro": "Velha",
          "pais_iso3": "bra",
          "pais_id": "20a0cca108ee48d5a890e389352ca43d",
          "estado_sigla": "sc",
          "estado_id": "2a1863b1f53243f792b640ae8685b7b0",
          "municipio_nome": "blumenau",
          "municipio_id": "53b230479a9c40db95c9189674343c66",
          "municipio_codigo": "4202404",
          "referencia": "Fundos",
          "created_at": "2021-02-16T03:47:50.000Z",
          "updated_at": "2021-04-28T17:23:59.000Z"
        }
      },
      "fabrica": {
        "fuso": -3,
        "logo": "https://static.textilnaweb.com/logos/fabrica.png",
        "id": "9b90650bd0b748f4a18ffd2afd867245",
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
        "created_at": "2021-03-19T17:13:58.000Z",
        "updated_at": "2021-03-19T17:13:58.000Z"
      },
      "colecao": {
        "valor_ped_min": 100,
        "valor_parcela_min": 100,
        "cores": {
          "preto": {
            "hex": "#000000",
            "img_url": ""
          },
          "branco": {
            "hex": "#FFFFFF",
            "img_url": ""
          },
          "vemelho": {
            "hex": "#FF0000",
            "img_url": ""
          }
        },
        "id": "cd067e90558a4a76b0ef92b45d26c3b3",
        "fabrica_id": "9b90650bd0b748f4a18ffd2afd867245",
        "etiqueta_id": "a6279a70d5ff4761802d534362a02c89",
        "nome": "Coleção modelo verão 01",
        "slug": "fabrica-colecao-modelo-verao-01",
        "prazo_medio_fat": 30,
        "qtdade_produzida_mes": 1000,
        "vig_venda_ini": "2020-01-01",
        "vig_venda_fim": "2021-12-31",
        "tabela_cores": "[{\"nome\":\"preto\",\"hex\":\"#000000\"},{\"nome\":\"branco\",\"hex\":\"#FFFFFF\"},{\"nome\":\"vemelho\",\"hex\":\"#FF0000\"}]",
        "created_at": "2021-03-19T17:27:19.000Z",
        "updated_at": "2021-03-19T17:27:19.000Z"
      },
      "etiqueta": {
        "logo": "https://static.textilnaweb.com/logos/fabrica-marca.png",
        "id": "a6279a70d5ff4761802d534362a02c89",
        "fabrica_id": "9b90650bd0b748f4a18ffd2afd867245",
        "nome": "marca",
        "slug": "fabrica-marca",
        "etiqueca_fabrica": false,
        "created_at": "2021-03-19T17:13:59.000Z",
        "updated_at": "2021-03-19T17:13:59.000Z"
      },
      "qtdade_total": 550,
      "valor_itens": 14239.5,
      "valor_total": 14239.5,
      "data_pedido": "2021-06-15T14:25:29.000Z",
      "data_prev_faturamento": "2021-05-05T14:30:52.000Z",
      "data_cancelamento": "2021-06-15T14:32:16.000Z",
      "etapas": [
        {
          "legenda": "pedido",
          "data": "2021-06-15T14:25:29.000Z"
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
            "id": "fca8e26d752c4b20b10d9b2c8aab9ecb",
            "codigo": "3014",
            "nome": "BERMUDA",
            "descricao": "BERMUDA C/ BOLSO RIBANA  E CADARO",
            "slug": "bermuda-3014",
            "tags": "destaque,verao",
            "fotos": [
              "https://api.netforcews.com/thumbnail/s3.sa-east-1/static.textilnaweb.com/produtos/fabrica-colecao-modelo-verao-01/3014_1.jpg"
            ]
          },
          "valor": 25.89,
          "qtdade": 550,
          "valor_total": 14239.5,
          "qtdades": {
            "sortido": {
              "p": 100,
              "m": 150,
              "g": 300
            }
          }
        }
      ]
    }
  ]
}
```