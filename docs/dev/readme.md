# Referência da API

Esta referência ajuda a implementar a API RESTful TextilNaWeb v1. Esta API usa um formato JSON para saída e é capaz de lidar com solicitações CORS (Cross-Origin Resource Sharing). A API não tem estado por isso todas as solicitações são validadas contra um token de API. O token da API pode ser obtido manualmente no aplicativo textilnaweb.com.

## Endpoints

Esta disponível 2 ambientes de api da textilnaweb. Sendo o `production` e o `sandbox`.

|     | Ambiente       | Endpoint                        |
|:---:|:--------------:|:--------------------------------|
| <img src="https://raw.githubusercontent.com/textilnaweb/assets/main/images/icons/www.svg" width="30"> | **production** | https://api.textilnaweb.com     |
| <img src="https://raw.githubusercontent.com/textilnaweb/assets/main/images/icons/labs.svg" width="30"> | **sandbox**    | https://apibeta.textilnaweb.com |

## Requisições

Todas as requisições contra a API, devem conter, no mínimo, o cabeçalho abaixo para que o bom funcionamento da API seja executada.

**Headers:**

```json
{
    "Accept": "application/json",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json", // quando for o caso
}
```

## Rotas Autenticadas

Para executar uma rota autenticada, deve ser informar um token de acesso (access_token) válido de um usuário registrado para que a rota possa funcionar corretamente. Caso a rota exige um token valido e não for passado ou o token informado não estiver válido o erro abaixo será retornado.

```json
{
  "error": {
    "id": "erro.auth.usuario.nao.logado",
    "data": {}
  }
}
```

Para passar o token de acesso, pode ser feito de 2 formas:

### Passando o token de acesso via header

Para passar o token de acesso via header da requisição, você deve fazer da seguinte forma:

```json
{
    "Authorization": "Bearer 7oohcHfts4sMHhFPKZ8oRLqgf1SCOxfS4PWMzJOZaVTErlWbpo38YPYIZuiz"
}
```

### Passando o token de acesso via query

Para passar o token de acesso via query da requisição, você deve fazer da seguinte forma:

```
https://api.textilnaweb.com/auth/usuario?access_token=7oohcHfts4sMHhFPKZ8oRLqgf1SCOxfS4PWMzJOZaVTErlWbpo38YPYIZuiz
```

## SDKs

Foi desenvolvido alguns SDks, para auxiliar a implementação da API em seu projeto.

### Definição dos SDKs:

[Veja aqui](/dev/sdk.html)

Abaixo você pode verificar os projetos disponíveis:

### NodeJS

**tnw-sdk** projeto desenvolvido para implementação da API no ambiente nodejs (javascript).
Para instalar:

```bash
$ npm install tnw-sdk
```