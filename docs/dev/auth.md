# Autenticação

Para ser utilizado a api com rotas privadas, vocÊ deve acessa-las utilizando um token de usuário. 
Para isso vocÊ deve fazer o login na api que irá retornar um access_token.

### Login

<api method="post" uri="/auth/login" />

Responsável por fazer o login de um usuário na estrutura.

#### Requisição

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| email     | E-mail do usuário <Badge text="obrigatório"/> |
| senha     | Senha do usuário <Badge text="obrigatório"/>  |
| os        | Nome do sistema operacional do cliente        |
| navegador | Nome do navegador do cliente                  |
| ip        | IP da maquina do cliente                      |

#### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| access_token | Código do access token par aser usando nas apis privadas |


### Logout

<api method="post" uri="/auth/logout" />

Responsável por encerrar uma token de acesso do usuário.

#### Requisição

Somente deve ser executado essa rota sobre um access_token

#### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| status       | true                                                     |


### Esqueci a senha

<api method="post" uri="/auth/esqueci-senha" />

Quando o usuário não lembra a sua senha, ele pode solicitar um token de autorização para que ele possa trocar a sua senha.
Para isso ele precisa informar o seu e-mail cadastrado que o sistema irá enviar um e-mail com o token de autorização para que a troca possa ser realizada.

#### Requisição

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| email     | E-mail do usuário <Badge text="obrigatório"/> |
| url       | URL para onde o clique no e-mail irá redirecionar. Ex.: https://www.olamundo.com/auth/$token$ <Badge text="obrigatório"/>  |
| notificar | Meio que será utilizado para notificar o usuário: `email` ou `sms`  |

#### Resposta

| atributo     | descrição                                                              |
|:-------------|:-----------------------------------------------------------------------|
| email        | E-mail que foi digitado do usuário                                     |
| protocolo    | Protocolo da notificação, para que possa ser re-enviada para o usuário |
