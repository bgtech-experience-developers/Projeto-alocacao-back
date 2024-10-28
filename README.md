# Inicializar projeto

Ao clonar, crie um banco no postgres com o nome ERP;
npm i prisma
npx prisma init
npm install prisma @prisma/client pg

##

## # API RESTful de Gestão de Colaboradores

Esta é uma API RESTful para gerenciar colaboradores. Abaixo estão as rotas disponíveis e suas funcionalidades:

## Rotas

### 1. Criar Colaborador

- Método: POST
- Rota: /colaborador/criar
- Objetivo: Registrar um novo colaborador.

### 2. Deletar Colaborador

- Método: DELETE
- Rota: /colaborador/deletar/:id
- Objetivo: Deletar um colaborador existente pelo seu ID.

### 3. Pegar Colaborador Único

- Método: GET
- Rota: /colaborador/unico/:id
- Objetivo: Retornar os detalhes de um colaborador específico pelo seu ID.

### 4. Pegar Todos os Colaboradores

- Método: GET
- Rota: colaborador/buscarTodos
- Objetivo: Retornar uma lista de todos os colaboradores registrados.
  Processo de instalação do Prisma
