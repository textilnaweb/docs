# Favoritos

O usuário pode ter uma lista de produtos favoritos na loja, para isso pode ser utilizado os comandos abaixo:

## Listar produtos de favoritos

<api method="get" uri="/favoritos" />

Retorna a lista de produtos marcados como favoritos do usuário.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

Lista de `produto_id`

Exemplo: 

```json
[
  "f8f20d6f1v7c4e4b18894bfc377122db2e",
  "fcb321e61v93d54c6299fbb228c4f5a6b9",
  "ffceb0ae1v42c34958a224bea9da22db8b"
]
```


## Marcar como favorito

<api method="put" uri="/favoritos/{pid}" />

Marcar produto id como favorito para o usuário logado

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| pid        | ID do produto que será marcado como favorito <Badge text="obrigatório"/> |

### Resposta

Retorna a nova lista de favoritos do usuário, agora contendo o produto rescém marcado.

Exemplo: 

```json
[
  "f8f20d6f1v7c4e4b18894bfc377122db2e",
  "fcb321e61v93d54c6299fbb228c4f5a6b9",
  "fe5645b51v45664278bdb594029a9d774f",
  "ffceb0ae1v42c34958a224bea9da22db8b"
]
```

## Desmarcando o produto como favorito

<api method="delete" uri="/favoritos/{pid}" />

Desmarcar um produto id da lista de produtos favoritos do usuário logado.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| pid        | ID do produto que será desmarcado como favorito <Badge text="obrigatório"/> |

### Resposta

Retorna a nova lista de favoritos do usuário, agora sem o produto rescém desmarcado.

Exemplo: 

```json
[
  "fcb321e61v93d54c6299fbb228c4f5a6b9",
  "fe5645b51v45664278bdb594029a9d774f",
  "ffceb0ae1v42c34958a224bea9da22db8b"
]
```