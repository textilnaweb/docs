# Eventos SendPulse

O sistema dispara alguns eventos para as APIs do SendPulse, conforme descrito abaixo:

## Ações de usuário

Quando um usuário esquece uma nova ou precisar confirmar o seu e-mail o sistema dispara um evento contra essa API, com os parâmetros abaixo:

```json
{
    "email"  : "fulano@gmail.com",
    "tipo"   : "chk",
    "nome"   : "Nome Completo",
    "apelido": "Nome curto",
    "token"  : "123456789"
}
```

**Os tipos suportados são:**

 - **chk** - Checar validade do e-mail através do token.
 - **pas** - Receber o token para traocar se senha, quando esqueceu a senha.

## Alteração do status do pedido

Quando a situação do pedido é alterada, o sistema dispara um evento contra essa API, com os parâmetros abaixo:

```json
{
    "id": "321654987"
    "numero": "132456789",
    "situacao": "entregue",
    "...."
}
```

**Situações:**

 - **emitido** - O carrinho foi finalizado e o pedido foi emitido.
 - **aprovado** - A Fabrica recebeu o pedido e aceitou/aprovou.
 - **faturado** - Pedido foi faturado pela fábrica.
 - **entregue** - Pedido foi entregue ao cliente.
 - **cancelado** - Pedido foi cancelado, conforme justificativa informada.


 ## NewsLetter

 Quando um novo e-mail é cadastrado na newsletter, o sistema dispara um evento contra essa API, com os parâmetros abaixo:

 ```json
 {
     "email": "fulano@teste.com"
 }
 ```