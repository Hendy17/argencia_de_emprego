# SHCore Job Board

Este projeto é uma aplicação web simples para gerenciar e visualizar vagas de emprego. Ele permite adicionar, listar, visualizar e editar informações sobre as vagas de emprego utilizando Node.js, Express, Handlebars e SQLite.

## Funcionalidades

- **Adicionar Vaga:** Adicione novas vagas de emprego, especificando título, descrição, salário, empresa e email de contato.
- **Listar Vagas:** Veja uma lista das vagas de emprego disponíveis, ordenadas pela data de criação.
- **Visualizar Vaga:** Visualize detalhes de uma vaga específica, incluindo o título, descrição, salário, empresa e informações de contato.
- **Editar Vaga:** Edite uma vaga existente para atualizar suas informações.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento JavaScript do lado do servidor.
- **Express:** Framework web para Node.js.
- **Handlebars:** Motor de templates para gerar HTML dinâmico.
- **SQLite:** Banco de dados leve utilizado para armazenar as informações das vagas.
- **Bootstrap:** Framework CSS para estilização da interface.


## Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/shcore-job-board.git
   cd shcore-job-board
   ```
2. **Instale as dependências:**
    ```bash
     npm install
    ``` 
3. **Configure o banco de dados:**     
  O banco de dados SQLite será configurado automaticamente na primeira execução.
4. **Execute a aplicação:** 
    ```bash
      npm run dev
     ``` 
5. **Acesse a aplicação:** 

  Abra o navegador e acesse http://localhost:3535 para visualizar a aplicação.

## Uso
* Adicionar Vaga: Clique em "Abrir Vagas" no menu de navegação e preencha o formulário para adicionar uma nova vaga.

* Editar Vaga: Na página de listagem de vagas, clique em "Ver vaga" para visualizar os detalhes e, em seguida, clique em "Editar" para atualizar as informações.

* Visualizar Vaga: Clique em "Ver vaga" para visualizar os detalhes completos de uma vaga específica.