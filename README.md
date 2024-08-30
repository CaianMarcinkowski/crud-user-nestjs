# Projeto NestJS com JWT e Swagger

Este projeto é uma API desenvolvida com NestJS, usando JWT para autenticação, Swagger para documentação da API e Docker para containerização. A aplicação também utiliza bcrypt para hashing de senhas e armazena informações em um array simples para fins de demonstração.

## Tecnologias Utilizadas

- **NestJS**: Framework para construir aplicações Node.js escaláveis.
- **Swagger**: Para documentação e testes interativos da API.
- **JWT**: Para autenticação baseada em tokens.
- **bcrypt**: Para hashing de senhas.
- **Docker**: Para containerização da aplicação.
- **nodemon**: Para reinicialização automática durante o desenvolvimento.

## Configuração

### Ambiente de Desenvolvimento

## 1. Primeiro, clone o repositório para sua máquina local usando o Git:

- git clone https://github.com/CaianMarcinkowski/crud-user-nestjs
- cd seu-repositorio

## 2. Instale as dependências do projeto usando npm (ou yarn, se preferir):

- npm install

## 3. Crie os arquivos de configuração para os ambientes de desenvolvimento e produção:

# Ambiente de Desenvolvimento

- Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

  NODE_ENV=DEV
  JWT_SECRET=G#2&5!bV9wZ@xP8\*r6$R1#jT

# Ambiente de Produção

- Crie um arquivo .env.prod na raiz do projeto com o conteúdo apropriado para o ambiente de produção:

  NODE_ENV=PROD
  JWT_SECRET=G#2&5!bV9wZ@xP8\*r6$R1#jT

Nota: Ambos os arquivos .env e .env.prod estão listados no .gitignore e não devem ser incluídos no repositório.

## 4. Rodar Localmente

Para iniciar a aplicação em modo de desenvolvimento, use:

- npm run start:dev

A aplicação estará disponível em http://localhost:3000. Você pode acessar a documentação da API em http://localhost:3000/docs.

Use o Postman ou Insominia para testar.

## 5. Subir para o Docker

### 5.1. Criar Imagem Docker

Você pode construir a imagem Docker para sua aplicação de duas maneiras:

**Opção 1: Usando o Terminal**

Construa a imagem Docker para sua aplicação com o seguinte comando:

- docker build -t crud-user .

**Opção 2: Usando o Visual Studio Code**

- Se você estiver usando o Visual Studio Code, você pode facilitar o processo usando a extensão do Docker:

  Instale a Extensão do Docker: No VS Code, vá para a aba de extensões e procure por "Docker". Instale a extensão oficial do Docker.

  Abrir o Dockerfile: Navegue até o arquivo Dockerfile no seu projeto.

  Construir a Imagem: Clique com o botão direito do mouse no Dockerfile e selecione a opção "Build Image" para construir a imagem Docker diretamente pelo VS Code.

### 5.2. Execute o contêiner com a imagem criada usando o comando:

  - docker run -p 3000:3000 crud-user

A aplicação estará disponível em http://localhost:3000 dentro do contêiner Docker.

## Testar com Swagger

### 6.1 A documentação da API está disponível em http://localhost:3000/docs.

## Endpoints da API

    POST /users
        Cadastro de um novo usuário.
        Requer um corpo JSON com os campos necessários (email, senha, nome).

    POST /users/login
        Autentica um usuário e retorna um token JWT.
        Requer um corpo JSON com email e senha.

    GET /users
        Retorna uma lista de todos os usuários cadastrados.
        Requer autenticação com token JWT.

    GET /users/:id
        Retorna um usuário específico pelo ID.
        Requer autenticação com token JWT.

    PATCH /users/:id
        Atualiza um usuário existente pelo ID.
        Requer autenticação com token JWT e um corpo JSON com os campos a serem atualizados (email, senha, nome).

    DELETE /users/:id
        Remove um usuário existente pelo ID.
        Requer autenticação com token JWT.
