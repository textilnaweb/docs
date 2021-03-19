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
    "email": "fulano@teste.com",
    "id": "321654987",
    "numero": "132456789",
    "situacao": "con",
    "data_emissao": "2021-03-03T02:30:49.000Z",
    "data_emissao_str": "03/03/2021 02:30",
    "qtdade_total": 120,
    "qtdade_total_str": "120",
    "valor_total": 1540.00,
    "valor_total_str": "1.540.00",

    "cliente_nome": "Cliente Ltda",
    "cliente_apelido": "Marca do Cliente",

    "fabrica_nome": "Fabrica da Fabrica",
    "fabrica_logo_url": "https://...",
    "fabrica_slug": "fabrica",

    "etiqueta_nome": "Fabrica de Teste",
    "etiqueta_logo_url": "https://...",
    "etiqueta_slug": "marca_da_fabrica",
}
```

**Situações:**

 - **agc** - Emitido: O carrinho foi finalizado e o pedido foi emitido.
 - **agf** - Aprovado: A Fabrica recebeu o pedido e aceitou/aprovou.
 - **age** - Faturado: Pedido foi faturado pela fábrica.
 - **con** - Entregue: Pedido foi entregue ao cliente.
 - **can** - Cancelado: Pedido foi cancelado, conforme justificativa informada.


 ## NewsLetter

 Quando um novo e-mail é cadastrado na newsletter, o sistema dispara um evento contra essa API, com os parâmetros abaixo:

 ```json
 {
     "email": "fulano@teste.com"
 }
 ```