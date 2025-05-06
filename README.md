# Desafio de Automação QA com Cypress

Este projeto foi desenvolvido como parte de uma avaliação prática de automação QA, cobrindo testes de front-end (loja EBAC) e testes de back-end (API Serverest), utilizando o Cypress.

---

## 🧪 Tecnologias utilizadas

* [Cypress](https://www.cypress.io/) - Framework de testes E2E
* Node.js e NPM
* API pública [Serverest.dev](https://serverest.dev/)

---

## 📁 Estrutura do Projeto

```
├── cypress
│   └── e2e
│       backend
|          |--- usuarios.cy.js              # Cadastro, listagem e deleção de usuários
│       frontende          # Fluxo de compra no e-commerce EBAC
│       └── 
│           ├── login.cy.js          # Testes de frontend
│           ├── cadastro.cy.js       

```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
https://github.com/seu-usuario/desafio-cypress-QA.git
cd desafio-cypress-QA
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes com a interface interativa do Cypress

```bash
npx cypress open
```

Ou em modo headless (linha de comando):

```bash
npx cypress run
```

---

## ✅ Cenários Automatizados

### 🔹 Front-End – EBAC Store

* Login com sucesso
* Login com falha (credenciais inválidas)
* Fluxo de compra com sucesso
* Verificação de produto fora de estoque
* Cadastro de novo usuário (extra)
* Recuperação de senha (extra)

### 🔹 Back-End – API Serverest

#### 🔸 Login

* Login válido (usuário criado dinamicamente)
* Login com erro de credenciais

#### 🔸 Usuários

* Listar usuários existentes
* Cadastrar usuário dinâmico
* Cadastrar e deletar usuário fixo (diego sousa)

#### 🔸 Produtos

* Listar produtos disponíveis
* Cadastrar novo produto com token de autenticação

#### 🔸 Carrinhos

* Criar carrinho com produto válido
* Concluir compra (excluir carrinho)

---

## 📌 Observações importantes

* A API `serverest.dev` pode conter dados resetados com frequência; portanto, os testes usam dados dinâmicos para evitar duplicidade.
* Os testes foram organizados por contexto e mantêm boas práticas de isolamento e validação.

---

## 👨‍💻 Autor

Diego Sampaio de Sousa
Analista de QA • Cypress • API • Automação de testes

---

## 📄 Licença

Projeto de uso livre e educacional.

