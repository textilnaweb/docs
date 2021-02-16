# Novo usuário

Para cadastrar um novo usuário/cliente na loja, deve ser utilizado os métodos abaixo para registrar um novo cliente e confirmar o seu e-mail.

## Busca empresa (CNPJ)

<api method="post" uri="/novo-usuario/buscar-empresa" />

Para cadastrar um novo usuário/empresa na loja, antes de iniciar o cadastro, deve ser feito uma busca dos dados da empresa na receita federal..

### Requisição

Em formato JSON

| atributo  | descrição                                                                                         |
|:----------|:--------------------------------------------------------------------------------------------------|
| email     | E-mail que pretende ser cadastrado para o novo usuário. <Badge text="obrigatório"/>               |
| cnpj      | CNPJ que será cadastrado e buscado as informações na receita federal. <Badge text="obrigatório"/> |


### Resposta

Com as informações passadas, será verificado se o e-mail e cnpj já foram cadastrados na loja e caso ainda não tenham sido utilizados, será feito a busca das informações do CNPJ na receita federal.
Retornando as informações conforme o exemplo abaixo:

```json
{
	"email": "seu-email@gmail.com",
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

## Registrar

<api method="post" uri="/novo-usuario" />

Registra um novo usuário na loja como cliente.

### Requisição

Exemplo de JSON de requisição:

```json
{
	"email": "seu-email@gmail.com",
	"senha": "123456",
	"nome": "Seu nome completo",
	"cnpj": "01001001000101",
	"ddd": "47",
	"celular": "999991010",
	"data_fundacao": "2007-04-01",
	"endereco": {
		"cep": "89010000",
		"logradouro": "Teste",
		"numero": "1000",
		"complemento": "sala 3",
		"bairro": "centro"
	}
	
}
```

### Resposta

Após cadastrado será retornado um JSON com a confirmação do nome e e-mail cadastrado do usuário. Conforme exemplificado no JSON abaixo:

```json
{
	"email": "seu-email@gmail.com",
	"nome": "Seu nome completo"
}
```


## Confirmação do e-mail

<api method="post" uri="/novo-usuario/{token}" />

Após cadastrado um novo usuário, é necessário confirmar o seu e-mail, para isso deve ser executado esta função na API para que seja confirmado o e-mail e ativação do cadastro do usuário.

### Requisição

| parametro  | descrição                                                                                                           |
|:-----------|:--------------------------------------------------------------------------------------------------------------------|
| token      | Token de validação do cadastro que foi enviado para o e-mail informado no cadastro. <Badge text="obrigatório"/>     |


### Resposta

Após confirmado o e-mail do cadastro, será retornado um JSON com o nome e e-mail cadastrado do usuário. Conforme exemplificado no JSON abaixo:

```json
{
	"email": "seu-email@gmail.com",
	"nome": "Seu nome completo"
}
```
