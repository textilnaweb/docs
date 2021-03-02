# Utils

O sistema disponibiliza algumas funções de utilizade geral, para atender algumas necessidades específicas.
Abaixo segue uma lista dessas funções:
 
## CEP - Buscar informações

<api method="get" uri="/utils/cep/{cep}" />

Retorna um objeto com as informações de localkização do cep, tal como pais, estado e municipio.

### Requisição

| parametro  | descrição                                     |
|:-----------|:----------------------------------------------|
| cep        | Número e somente números do cep que se pretende buscar <Badge text="obrigatório"/> |


### Resposta

```json
{
  "cep": "89032000",
  "pais": {
    "id": "20a0cca108ee48d5a890e389352ca43d",
    "iso3": "bra",
    "nome": "brasil"
  },
  "estado": {
    "id": "2a1863b1f53243f792b640ae8685b7b0",
    "sigla": "sc",
    "nome": "santa catarina",
    "codigo": "42"
  },
  "municipio": {
    "id": "53b230479a9c40db95c9189674343c66",
    "codigo": "4202404",
    "nome": "blumenau"
  }
}
```

## NewsLetter - registrar e-mail

<api method="post" uri="/utils/newsletter" />

Registrar um novo e-mail na lista de newsletter do projeto.

### Requisição

Em formato JSON

| atributo  | descrição                                                                   |
|:----------|:----------------------------------------------------------------------------|
| sessao_id | ID da sessão do usuário no client <Badge text="obrigatório"/>               |
| email     | E-mail a ser rewgistrado na lista de newsletter <Badge text="obrigatório"/> |

### Resposta

Após registrado o e-mail na lista de newsletter, será retornado o status de ok.

Exemplo: 

```json
{
    "status": true
}
```

## Gerar ID de Sessão

<api method="get" uri="/utils/gerar-token-sessao" />

Gerar um novo ID de sessão para ser usado no lado do client para acompanhar os movimento do usuário, mesmo não estando logado.

### Requisição

Nada

### Resposta

Gerar gerado um ID da sessão da interface.

Exemplo: 

```json
{
  "session_id": "5f2236284ef441ad84daeb8c8c35fcab"
}
```