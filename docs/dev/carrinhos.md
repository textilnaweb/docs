# Carrinhos

Na hora do usuáiro estar comprandos os produtos na loja o mesmo poderá ter vários carrinho abertos. Isso por que a loja é estruturada para que seja um carrinho por coleção de cada empresa.
Abaixo estamos relacionando as ações para manipular o carrinho.

## Listar carrinhos

<api method="get" uri="/carrinhos" />

Retorna a lista de carrinhos abertos na sessão do usuário.

### Requisição

Em formato JSON

| atributo  | descrição                                                     |
|:----------|:--------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/> |

### Resposta

Lista de carrinhos abertos

Exemplo: 

```json
[
  //...
]
```


## Adicionar/Atualizar produto no carrinho

<api method="post" uri="/carrinhos/{produto}" />

Adicionar ou atualizar produto em um carrinho aberto.

> Caso não tem um carrinho aberto para a `sessao_id` da coleção do produto, será berto um novo carrinho.

### Requisição

Em formato JSON

| atributo  | descrição                                                          |
|:----------|:-------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>      |
| tamanhos  | Objeto com a lista de cores e tamanhos <Badge text="obrigatório"/> |

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

Em formato JSON

| atributo  | descrição                                                          |
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

Em formato JSON

| atributo  | descrição                                                          |
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