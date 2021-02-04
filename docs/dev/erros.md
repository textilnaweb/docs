# Erros

## Estrutura de um retorno de erro

Todos os erros informados pela API estarão dentro de uma estrutura de um objeto json, conforme o exemplo abaixo:

```json
{
    "error": {
        "id": "erro.id.do.erro",
        "data": {}
    }
}
```

Sempre será retorna dentro de um subobjeto `error` e dentro dele teremos sempre os atributos `id` e `data`.

> O subobjeto `error` poderá ter outros atributos além do id e data, mas isso pode mudar conforma cada erro.

## Estrutura do objeto Error

| atributo | descrição |
|---|---|
| id | *obrigatório* Código de identificação do erro da mensagem. Sempre iniciado com o prefixo `erro.` |
| data | *obrigatório* Subobjeto com outras informações da mensagem. Por exemplo em uma mensagem de `erro.usuario.nao.encontrado` o atributo data poderá ter o email do usuário que se tentou buscar |