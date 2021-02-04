# Autenticação

Para ser utilizado a api com rotas privadas, vocÊ deve acessa-las utilizando um token de usuário. 
Para isso você deve fazer o login na api que irá retornar um access_token.

## Usuário

<api method="get" uri="/auth/usuario" />

Retorna o usuário logado pelo access_token.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

| atributo     | descrição                                    |
|:-------------|:---------------------------------------------|
| id           | ID do usuário no sistema                     |
| nome         | Nome completo do usuário                     |
| apelido      | Nome curto do usuário                        |
| email        | E-mail do usuário para acessar o sistema     |
| ultimo_login | Data e hora que foi realizado o último login |
| ultimo_senha | Data e hora que foi trocado a última senha   |


## Login

<api method="post" uri="/auth/login" />

Responsável por fazer o login de um usuário na estrutura.

### Requisição

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| email     | E-mail do usuário <Badge text="obrigatório"/> |
| senha     | Senha do usuário <Badge text="obrigatório"/>  |
| os        | Nome do sistema operacional do cliente        |
| navegador | Nome do navegador do cliente                  |
| ip        | IP da maquina do cliente                      |

### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| access_token | Código do access token par aser usando nas apis privadas |


## Logout

<api method="post" uri="/auth/logout" />

Responsável por encerrar uma token de acesso do usuário.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`

### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| status       | true                                                     |


## Esqueci a senha

<api method="post" uri="/auth/esqueci-senha" />

Quando o usuário não lembra a sua senha, ele pode solicitar um token de autorização para que ele possa trocar a sua senha.
Para isso ele precisa informar o seu e-mail cadastrado que o sistema irá enviar um e-mail com o token de autorização para que a troca possa ser realizada.

### Requisição

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| email     | E-mail do usuário <Badge text="obrigatório"/> |
| url       | URL para onde o clique no e-mail irá redirecionar. Ex.: https://www.olamundo.com/auth/$token$ <Badge text="obrigatório"/>  |
| notificar | Meio que será utilizado para notificar o usuário: `email` ou `sms`  |

### Resposta

| atributo     | descrição                                                              |
|:-------------|:-----------------------------------------------------------------------|
| email        | E-mail que foi digitado do usuário                                     |
| protocolo    | Protocolo da notificação, para que possa ser re-enviada para o usuário |


## Esqueci a senha (Re-notificar)

<api method="post" uri="/auth/esqueci-senha/notificar" />

Após ter solicitado um token de autorização para trocar a senha, o sistema retorna o protocolo da notificação. Caso o usuário diga que não recebeu, através desse protocolo é possivel re-enviar o token de autorização. Pode ser feito pelo mesmo meio solicitado originalmente ou por outro, se necessário.

### Requisição

Em formato JSON

| atributo  | descrição                                                                                 |
|:----------|:------------------------------------------------------------------------------------------|
| protocolo | Código de protocolo retornado na solicitação de troc de senha <Badge text="obrigatório"/> |
| notificar | Meio que será utilizado para notificar o usuário: `email` ou `sms`                        |

### Resposta

| atributo     | descrição                                                              |
|:-------------|:-----------------------------------------------------------------------|
| status       | true                                                                   |

## Reiniciar senha/Trocar senha

<api method="post" uri="/auth/reiniciar-senha" />

Com um token de autorização em mãos para trocar de senha, você pode executar este comando para trocar a sua senha.

### Requisição

Em formato JSON

| atributo  | descrição                                                                                       |
|:----------|:------------------------------------------------------------------------------------------------|
| token     | Token de autorização para trocar a senha recebido por e-mail ou sms <Badge text="obrigatório"/> |
| senha     | Sua nova senha <Badge text="obrigatório"/>                                                      |

### Resposta

| atributo     | descrição                                                              |
|:-------------|:-----------------------------------------------------------------------|
| status       | true                                                                   |
