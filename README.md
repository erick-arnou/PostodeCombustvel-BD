# PostodeCombustvel-BD
Repositório destinado à esquematização do projeto final de posto de combustível, da disciplina de Banco de Dados. 

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar o servidor em sua máquina.

### 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
- Um banco de dados relacional compatível com o Prisma Client (ex.: PostgreSQL)

---

## 🔧 Passo a Passo

### 1. Clonar o Repositório

Abra o terminal na pasta onde deseja salvar o projeto e execute:

```bash
git clone https://github.com/erick-arnou/PostodeCombustvel-BD.git
```

### 2. Entrar na Pasta Principal do Projeto

Navegue até a pasta `main`, que contém o arquivo `package.json`:

```bash
cd PostodeCombustvel-BD/main
```

### 3. Instalar as Dependências

Instale todos os pacotes necessários (Express, Prisma, Nodemon, etc.):

```bash
npm install
```

### 4. Configurar as Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz da pasta `main` (onde está localizado o `package.json`) e configure a conexão com o banco de dados:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

> **Observação:** Substitua `usuario`, `senha` e `nome_do_banco` pelas credenciais do seu banco de dados.

### 5. Sincronizar o Prisma com o Banco de Dados

Gere o Prisma Client:

```bash
npx prisma generate
```

Caso seja necessário criar as tabelas no banco de dados, execute também:

```bash
npx prisma db push
```

> Ou, se o projeto utiliza migrações:

```bash
npx prisma migrate deploy
```

### 6. Inicializar o Servidor de Desenvolvimento

Inicie o servidor utilizando o Nodemon:

```bash
npm run dev
```

Se tudo estiver configurado corretamente, o servidor será iniciado e uma mensagem semelhante à seguinte será exibida no terminal:

```text
Server running on http://localhost:3000
```


- IFCE Campus Maracanaú 2026.1
