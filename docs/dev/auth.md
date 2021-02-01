# Autenticação

Para ser utilizado a api com rotas privadas, vocÊ deve acessa-las utilizando um token de usuário. 
Para isso vocÊ deve fazer o login na api que irá retornar um access_token.

### /login

<api method="get" uri="/auth/login" />


Responsável por fazer o login de um usuário na estrutura

#### Requisição

| atributo  | descrição                                         |
|:----------|:--------------------------------------------------|
| email     | E-mail do usuário  <Badge text="obrigatório"/>    |
| senha     | Senha do usuário  <Badge text="obrigatório"/>     |
| os        | Nome do sistema operacional do cliente            |
| navegador | Nome do navegador do cliente                      |
| ip        | IP da maquina do cliente                          |

#### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| access_token | Código do access token par aser usando nas apis privadas |
