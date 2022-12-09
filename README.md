# Desafio-vaga-full-stack

O projeto deve criar um cadastro de clientes que poderá conter muitos contatos associados. Depois deste processo deverá ter um relatório em tela que mostre os clientes e os contatos vinculados a este cliente.Projeto fullstack realizado em Node.js com o framework express,banco de dados relacional Postgres e React com Typescript.

## Iniciar a Aplicação

### Início

Após efetuar o clone do repositório da aplicação. Executar o terminal da pasta API:

Instalar todas as dependencias da aplicação:

```shell
    yarn
```

criar um arquivo .env seguindo o exemplo do .env.exmaple.

```shell
    POSTGRES_USER=""
    POSTGRES_PWD=""
    POSTGRES_DB=""
```

Criar o banco de dados no Postgres e então rodar as migrations do TypeORM

```shell
    yarn typeorm migration:run -d src/data-source.ts
```

Executar o servidor

```shell
    yarn dev
```

Com a API executando e sem erros, deve-se abrir um novo terminal na pasta Pages e executar os seguintes comandos:

```shell
    yarn
```

Para executar a visualização da página:

```shell
    yarn start
```

## Endpoints - API

## 1. **Users**

O User é definido como:

| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| id        | string  | Identificador único do usuário               |
| firstName | string  | O nome do usuário.                           |
| lastName  | string  | O sobrenome do usuário.                      |
| phone     | boolean | O telefone do usuário.                       |
| email     | objeto  | O e-mail do usuário.                         |
| createdAt | Date    | Indica data de criação do usuário            |
| updatedAt | Date    | Indica data de última atualização do usuário |
| contacts  | Array   | Todos os contatos vinculados a esse usuário  |

### Endpoints

| Método | Rota       | Descrição                  |
| ------ | ---------- | -------------------------- |
| POST   | /users     | Criação de um usuário.     |
| GET    | /users     | Lista todos os usuários    |
| GET    | /users/:id | Lista o próprio usuário    |
| DELETE | /users/:id | Deleta o usuário           |
| PATCH  | /users/:id | Atualiza campos do usuário |

---

### 1.1. **Criação de Usuário**

### `/users`

### Request:

```
POST /users
```

### Corpo da Requisição:

```json
{
  "firstName": "Nome",
  "lastName": "Sobrenome",
  "phone": "4512345678",
  "email": "email@email.com"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "924c8d06-77ad-4a18-a61d-5634634ada5b",
  "firstName": "Nome",
  "lastName": "Sobrenome",
  "email": "email@email.com",
  "phone": "4512345678",
  "created_at": "2022-12-09T11:35:59.113Z",
  "updated_at": "2022-12-09T11:35:59.113Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                 |
| --------------- | ------------------------- |
| 400 Bad Request | Email already registered. |

---

### 1.2. **Listar Usuários**

### `/users`

### Request:

```
GET /users
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "924c8d06-77ad-4a18-a61d-5634634ada5b",
    "firstName": "Nome",
    "lastName": "Sobrenome",
    "email": "email@email.com",
    "phone": "4512345678",
    "created_at": "2022-12-09T11:35:59.113Z",
    "updated_at": "2022-12-09T11:35:59.113Z",
    "contacts": []
  }
]
```

### 1.3. **Atualizar Usuário**

### `/users/:id`

### Request:

```
PATCH /users/924c8d06-77ad-4a18-a61d-5634634ada5b
```

### Corpo da Requisição:

```json
{
  "firstName": "atualizado",
  "lastName": "atualizado",
  "email": "atualizado@email.com",
  "phone": "4587654321"
}
```

---

### Response:

```
200 OK
```

```json
{
  "message": "user updated!"
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar Usuário**

### `/users/:id`

### Request:

```
DELETE /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
```

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User deleted"
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Conflict   | User not found. |

---

## 2. **Contact**

O Contact é definido como:

| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| id        | string  | Identificador único do usuário               |
| firstName | string  | O nome do usuário.                           |
| lastName  | string  | O sobrenome do usuário.                      |
| phone     | boolean | O telefone do usuário.                       |
| email     | objeto  | O e-mail do usuário.                         |
| createdAt | Date    | Indica data de criação do usuário            |
| updatedAt | Date    | Indica data de última atualização do usuário |
| user      | String  | ID do usuário ao qual o contato pertence     |

### Endpoints

| Método | Rota         | Descrição                  |
| ------ | ------------ | -------------------------- |
| POST   | /contact     | Criação de um contato.     |
| GET    | /contact     | Lista todos os contatos    |
| DELETE | /contact/:id | Deleta o contato           |
| PATCH  | /contact/:id | Atualiza campos do contato |

---

### 2.1. **Criar Contato**

### `/contacts/:id`

### Exemplo de Request:

```
POST /contacts/
```

### Corpo da Requisição:

```json
{
  "firstName": "contato",
  "lastName": "contato",
  "email": "contato@email.com",
  "phone": "4512345678"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "6681eabd-7ea4-47e4-8379-532b0861a944",
  "firstName": "contato",
  "lastName": "contato",
  "email": "contato@email.com",
  "phone": "4512345678",
  "created_at": "2022-12-09T11:52:36.796Z",
  "updated_at": "2022-12-09T11:52:36.796Z",
  "user": "5874f4de-2ed8-47ad-b3d7-3c06816b08f9"
}
```

### 2.2. **Listar Contatos**

### `/contact`

### Request:

```
GET /contact/
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "6681eabd-7ea4-47e4-8379-532b0861a944",
    "firstName": "contato",
    "lastName": "contato",
    "email": "contato@email.com",
    "phone": "4512345678",
    "created_at": "2022-12-09T11:52:36.796Z",
    "updated_at": "2022-12-09T11:52:36.796Z"
  }
]
```

---

### 2.3. **Atualizar Contato**

### `/contact/:id`

### Request:

```
PATCH /users/6681eabd-7ea4-47e4-8379-532b0861a944
```

### Corpo da Requisição:

```json
{
  "firstName": "atualizado",
  "lastName": "atualizado",
  "email": "atualizado@email.com",
  "phone": "4587654321"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Contact updated"
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 2.4. **Deletar um Contato por ID**

### `/contact/:id`

### Request:

```
DELETE /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
```

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Conflict   | User not found. |
