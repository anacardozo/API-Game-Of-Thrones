# 🐉 IGNIS

API desenvolvida para gerenciamento de dragões inspirados no universo de Game of Thrones.
O projeto permite cadastrar, visualizar, editar e remover dragões, além de contar com autenticação de usuários.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* MongoDB Atlas (banco de dados em nuvem)
* Mongoose
* JWT (JSON Web Token)
* Swagger (documentação da API)

---

## 📌 Funcionalidades

### 🔐 Autenticação de usuários

* Cadastro de usuários
* Login com geração de token JWT
* Controle de acesso às rotas protegidas

### 🐉 Gerenciamento de dragões

* Criar dragões
* Listar dragões
* Buscar dragão por ID
* Atualizar dados do dragão
* Remover dragão

---

## 🗂️ Estrutura do projeto

```bash
src/
  controllers/
  routes/
  services/
  models/
```

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o servidor
npm start
```

O servidor será iniciado em:

```
http://localhost:4000
```

---

## 📖 Documentação da API

A documentação foi feita com Swagger.

Após rodar o projeto, acesse:

```
http://localhost:4000/api-docs
```

---

## 🔑 Autenticação

As rotas protegidas utilizam JWT.

Após realizar o login, utilize o token no header:

```
Authorization: Bearer seu_token
```

---

## ☁️ Banco de dados

O projeto utiliza o MongoDB Atlas para armazenamento em nuvem.

---

## 👩‍💻 Autora

Desenvolvido por 
- Ana Flávia Cardozo
- Geovanna
- Raissa
