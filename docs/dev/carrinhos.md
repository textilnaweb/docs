# Carrinhos

Na hora do usuário estar comprandos os produtos na loja o mesmo poderá ter vários carrinho abertos. Isso por que a loja é estruturada para que seja um carrinho por coleção de cada fábrica.
Abaixo estamos relacionando as ações para manipular o carrinho.

## Tokens de Sessão

O lado do client é que deve controlar a sessão do usuário aberta, para determinar quanto tempo o carrinho poderá ficar aberto. Para isso o client, deverá gerar um token utilizando UUID e sempre que precisar adicionar ou remover um produto no carrinho, esse token deverá ser fornecido.

### Exemplo de token de sessão

```json
{
    "token": "218eef8cb4204d138de187773f901129"
}
```

## Listar carrinhos

<api method="get" uri="/carrinhos" />

Retorna a lista de carrinhos abertos na sessão do usuário.

### Requisição

Parâmetros header:

| header    | descrição                                                     |
|:----------|:--------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/> |

### Resposta

Lista de carrinhos abertos

Exemplo: 

```json
[
  {
    "id": "f240b035a8134e51804f97994c5414a9",
    "numero": "210226873200",
    "situacao": "pre",
    "cond_pagto": {
      "id": "4290e43ac00f472c9dc31e7284298335",
      "codigo": "001",
      "nome": "30 dias",
      "prazo_medio": 30,
      "qtd_parcelas": 1,
      "created_at": "2021-05-05T14:03:18.000Z",
      "updated_at": "2021-05-05T14:03:18.000Z"
    },
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
    ],
    "condpagtos": [
        {
            "id": "4290e43ac00f472c9dc31e7284298335",
            "codigo": "001",
            "nome": "30 dias",
            "prazo_medio": 30,
            "qtd_parcelas": 1
        }
    ],    
    "data_min_para_entrega": "2021-10-23"
  }
]
```

## Adicionar/Atualizar produto no carrinho

<api method="put" uri="/carrinhos/{produto}" />

Adicionar ou atualizar produto em um carrinho aberto.

> Caso não tem um carrinho aberto para a `sessao_id` da coleção do produto, será berto um novo carrinho.

### Requisição

Em formato JSON

| atributo  | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| tamanhos  | Objeto com a lista de cores e tamanhos <Badge text="obrigatório"/> |

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

| parametro  | descrição                                                                 |
|:-----------|:--------------------------------------------------------------------------|
| produto    | ID do produto que será adicionado no carrinho <Badge text="obrigatório"/> |


#### Exemplo do objeto de tamanhos

```json
{
    "preto": { "p" : 10, "m" : 20, "g": 10, "gg": 10 },
    "branco": { "p" : 1, "m" : 2, "g": 1, "gg": 1 },
}
```

> Quando precisar informar as quantidades sendo as cores sortidas, deve ser informado no lugar da cor a palavra **sortido**.

```json
{
    "sortido": { "p" : 10, "m" : 20, "g": 10, "gg": 10 },
}
```

### Resposta

Após adicionado ou atualizado um produto no carrinho, será retornado o status de ok.

Exemplo: 

```json
{
    "status": true
}
```

## Remover produto do carrinho

<api method="delete" uri="/carrinhos/{produto}" />

Remover um produto do carrinho.

### Requisição

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

| parametro  | descrição                                                                 |
|:-----------|:--------------------------------------------------------------------------|
| produto    | ID do produto que será adicionado no carrinho <Badge text="obrigatório"/> |

### Resposta

O produto informado será removido do carrinho e retornado o status ok.

Exemplo: 

```json
{
    "status": true
}
```

## Limpar os carrinhos da sessão

<api method="delete" uri="/carrinhos" />

Remove todos os produtos de todos os carrinhos abertos da sessão.

### Requisição

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

### Resposta

Será removido dos carrinhos abertos todos os produtos e retornado o status ok.

Exemplo: 

```json
{
    "status": true
}
```

## Atualizar informações do carrinho

<api method="put" uri="/carrinhos/{id_carrinho}/atualizar" />

Para atualizar algumas informações do carrinho, antes de fazer o checkout, vocÊ pode utilizar o metodo abaixo:

### Requisição

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

### Requisição

Em formato JSON

| atributo               | descrição                                                                    |
|:-----------------------|:-----------------------------------------------------------------------------|
| cond_pagto_id          | ID da condição de pagamento                                                  |
| data_prev_faturamento  | Data escolhida para o faturamento / entrega (semana: segunda)  YYYY-MM-DDD   |

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

| parametro   | descrição                                                                 |
|:------------|:--------------------------------------------------------------------------|
| id_carrinho | ID do carrinho <Badge text="obrigatório"/>                                |


### Resposta

Exemplo: 

```json
{
    "status": true
}
```

## Fechar carrinho

<api method="post" uri="/carrinhos" />

Fechar/finalizar o pré-pedido e transforma-lo em pedido aguardando a confirmação da fábrica.

### Requisição

| header    | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |

| query      | descrição                                                                                                             |
|:-----------|:----------------------------------------------------------------------------------------------------------------------|
| ids        | Lista de ids dos carrinho que pretende fechar. Quando não informado, será fechado todos os pedidos abertos da sessão. |


### Resposta

Após finalizar todos os pedidos abertos da sessão ou da lista informada, será retornado o status de ok.

Exemplo: 

```json
{
    "status": true
}
```