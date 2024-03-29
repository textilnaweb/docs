# Meus Dados

Para realizar a manutenção do cadastro do usuário logado, deve ser utilizado os métodos abaixo para fazer as alterações .

## Dados do usuário

<api method="get" uri="/meus-dados" />

Retorna o json dos dados do usuário cadastrado e logado na loja.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

Serão passadas as informações do usuário, empresa e endereço.

Exemplo:

```json
{
  "usuario": {
      "nome": "Razão Social da Empresa Ltda",
      "apelido": "Como usuário quer ser chamado",
      "email": "comprador@gmail.com",
      "fuso": -3,
      "lang": "pt_br",
  },
  "empresa": {
      "cnpj": "00000000000000",
      "nome_fantasia": "Minha marca",
      "ie": "",
      "im": "",
      "data_fundacao": "2007-04-01",
      "email_fin": "financeiro@gmail.com",
      "email_nfe": "nfe@gmail.com",
      "ddd": "47",
      "telefone_com": "",
      "telefone_cel": "999990000",
  },
  "endereco": {
      "cep": "89032300",
      "logradouro": "Teste",
      "numero": "1855",
      "complemento": "sala 1",
      "bairro": "passo manso",
      "pais_iso3": "bra",
      "pais_id": "20a0cca108ee48d5a890e389352ca43d",
      "estado_sigla": "sc",
      "estado_id": "2a1863b1f53243f792b640ae8685b7b0",
      "municipio_nome": "blumenau",
      "municipio_id": "53b230479a9c40db95c9189674343c66",
      "municipio_codigo": "4202404",
      "referencia": null,
      "created_at": "2021-02-16T03:47:50.000Z",
      "updated_at": "2021-02-16T03:47:50.000Z"
  }
}
```

## Dados do usuário (atualizados)

<api method="get" uri="/meus-dados/atualizados" />

Retorna os dados atualizados da receita federal do CNPJ cadastrado no usuário logado.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

O sistema irá fazer uma nova consulta pelo `cnpj` cadastrado do usuário logado e retornar os dados encontrados:

```json
{
	"cnpj": "01001001000101",
	"nome": "SUA RASAO SOCIAL LTDA",
    "fantasia": "SEU NOME FANTASIA",
    "data_fundacao": "29/03/2007",
    "situacao": "ATIVA",
    "endereco": {
        "cep": "89010000",
        "pais": "bra",
        "logradouro": "RUA SETE DE SETEMBRO",
        "numero": "1000",
        "complemento": "SALA 03",
        "bairro": "CENTRO",
        "municipio": "BLUMENAU",
        "estado": "SC"
    }
}
```

## Atualizar dados

<api method="put" uri="/meus-dados" />

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

Pode ser alterado os dados do cliente, usuário e endereço, veja o exemplo abaixo os campos que podem ser alterados em cada nivel.

```json
{
  "usuario": {
      "apelido": "Como usuário quer ser chamado",
      "fuso": -3,
      "lang": "pt_br"
  },
  "empresa": {
      "nome_fantasia": "Minha marca",
      "ie": "",
      "im": "",
      "email_fin": "financeiro@gmail.com",
      "email_nfe": "nfe@gmail.com",
      "ddd": "47",
      "telefone_com": "999991010",
      "telefone_cel": "999991011"
  },
  "endereco": {
      "cep": "89040000",
      "logradouro": "Rua de teste",
      "numero": "100",
      "complemento": "Sala 2",
      "bairro": "Centro",
      "referencia": "Na frente do shopping"
  }
}
```

### Resposta

Serão passadas as informações do usuário, empresa e endereço, atualizados conforma os campos informados na requisição.

Exemplo:

```json
{
  "usuario": {
      "nome": "Razão Social da Empresa Ltda",
      "apelido": "Como usuario quer ser chamado",
      "email": "comprador@gmail.com",
      "fuso": -3,
      "lang": "pt_br",
  },
  "empresa": {
      "cnpj": "00000000000000",
      "nome_fantasia": "Minha marca",
      "ie": "",
      "im": "",
      "data_fundacao": "2007-04-01",
      "email_fin": "financeiro@gmail.com",
      "email_nfe": "nfe@gmail.com",
      "ddd": "47",
      "telefone_com": "",
      "telefone_cel": "999990000",
  },
  "endereco": {
      "cep": "89032300",
      "logradouro": "Teste",
      "numero": "1855",
      "complemento": "sala 1",
      "bairro": "passo manso",
      "pais_iso3": "bra",
      "pais_id": "20a0cca108ee48d5a890e389352ca43d",
      "estado_sigla": "sc",
      "estado_id": "2a1863b1f53243f792b640ae8685b7b0",
      "municipio_nome": "blumenau",
      "municipio_id": "53b230479a9c40db95c9189674343c66",
      "municipio_codigo": "4202404",
      "referencia": null,
      "created_at": "2021-02-16T03:47:50.000Z",
      "updated_at": "2021-02-16T03:47:50.000Z"
  }
}
```

## Trocar e-mail

<api method="put" uri="/meus-dados/trocar-email" />

Alterar e-mail do usuário logado.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| novo      | Novo E-mail <Badge text="obrigatório"/>       |

### Resposta

O sistema irá fazer a troca do e-mail do usuário logado e responser o status ok:

```json
{
	"status": true
}
```

## Trocar senha

<api method="put" uri="/meus-dados/trocar-senha" />

Alterar senha do usuário logado, informando a senha atual e a nova senha.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

Em formato JSON

| atributo  | descrição                                                        |
|:----------|:-----------------------------------------------------------------|
| atual     | Senha atual do usuário logado. <Badge text="obrigatório"/>       |
| nova      | Nova senha para ser substituida. <Badge text="obrigatório"/>     |

### Resposta

O sistema irá fazer a troca da senha do usuário logado e responser o status ok:

```json
{
	"status": true
}
```