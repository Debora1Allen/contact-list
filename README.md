# Contact List API

Este projeto é uma API RESTful criada usando **Node.js**, **Express** e **MongoDB** que permite gerenciar pessoas e seus contatos. Uma pessoa pode ter vários contatos, como números de telefone, endereços de e-mail ou contas do WhatsApp.


## Índice

- [Features](#features)
- [Instalação](#instalação)
- [API Endpoints](#api-endpoints)
- [Tecnologias](#tecnologias)
- [Testes](#testes)
- [Licença](#licença)

## Features

- Funcionalidade de criar, ler, atualizar e excluir (CRUD) para gerenciar pessoas e seus contatos.
- Usa MongoDB para armazenamento de dados.
- Design de API RESTful.

## Instalação

### Pré-requisitos

- **Node.js** (v14+)
- **MongoDB** (instância local ou na nuvem)

### Steps

1. Clone o repositório:

```bash
git clone <https://github.com/Debora1Allen/contact-list>
```

2. Navegue até o diretório do projeto:

```bash
cd contact-list
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` para variáveis ​​de ambiente. Exemplo:

```env
MONGO_URI=mongodb://localhost:27017/contactList
PORT=3000
```

5. Inicie o servidor:

```bash
npm start
```

O servidor agora deve estar em execução em `http://localhost:3000`.

## Estrutura do Projeto

```
/contact-list
|-- /src
|   |-- /controllers
|   |   |-- contactController.ts
|   |-- /models
|   |   |-- contactModel.ts
|   |   |-- personModel.ts
|   |-- /routes
|   |   |-- personRoutes.ts
|   |-- /balanced       
|   |   |-- balancedBrackets.ts
|   |   |-- balancedBrackets.test.ts
|-- app.ts
|-- tsconfig.json
|-- package.json

```
---

## API Endpoints

| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| GET    | `/api/persons`           | Get all persons                   |
| POST   | `/api/persons`           | Create a new person               |
| GET    | `/api/persons/:id`       | Get a person by ID                |
| PUT    | `/api/persons/:id`       | Update a person by ID             |
| DELETE | `/api/persons/:id`       | Delete a person by ID             |


### Sample Payload (Person Creation)
```json
{
  "name": "John Doe",
  "contacts": [
    { "type": "email", "value": "john@example.com" },
    { "type": "phone", "value": "+1234567890" }
  ]
}
```
---
## Tecnologias

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

---

## Testes

Para executar testes, certifique-se de ter `jest` ou `mocha` instalado (dependendo do que você configurou) e execute:

```bash
npm test
```

---


