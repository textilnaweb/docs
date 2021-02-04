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