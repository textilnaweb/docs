# Interesses

## Fábrica

<api method="post" uri="/fabricas" />

Registra um novo interesse de uma fabrica em participar da lista de fabrica da Têxtil na Web.

### Requisição

Exemplo de JSON de requisição:

```json
{
	"nome": "Seu nome completo",
	"cnpj": "01001001000101",
	"email": "seu-email@gmail.com",
	"telefone": "47999991010"	
}
```

### Resposta

Exemplo: 

```json
{
  "status": true
}
```

## Representante

<api method="post" uri="/representantes" />

Registra um novo interesse de um representante em participar da lista de representantes e agentes da Têxtil na Web.

### Requisição

Exemplo de JSON de requisição:

```json
{
	"nome": "Seu nome completo",
	"cnpjcpj": "01001001000101",
	"email": "seu-email@gmail.com",
	"telefone": "47999991010"	
}
```

### Resposta

Exemplo: 

```json
{
  "status": true
}
```