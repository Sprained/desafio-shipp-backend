# IMERSÃO PRÁTICA - Zaitt
Projeto realizado para teste de seleção da Zaitt para a vaga de desenvolvedor!

## Tecnologias

##### Api
- NodeJS

##### Banco de dados
- SQLite

## Introdução

O sistema foi feito em NodeJS usando o banco de dados SQLite. Para facilitar a criação do banco de dados, após o desenvolvimento, optei por usar a lib Sequelize, assim precisando apenas passar os comandos: `npx sequelize db:migrate` ou `yarn sequelize db:migrate`.

Iniciando a aplicação

API
Tendo o Node instalado na máquina, abra o terminal na pasta e digite o seguinte comando: npm run start ou yarn start. Para popular o banco de dados, após a inicialização, basta chamar a rota post `http://localhost:3333/V1/stores` usando o Postman ou Insomnia.

Apos puxar a rota get `http://localhost:3333/V1/stores` sera preciso passar o query.params location[lat] e location[long] para funcionamento do mesmo.
Exemplo do link da rota com os query.params: `http://localhost:3333/V1/stores?location%5Blat%5D=-23.547232&location%5Blong%5D=-46.645371`

## Comentarios de desenvolvimento

##### API

Para o cálculo de distância, foi usado um estudo de cálculo matematico para mostrar a distância entre as localizações utilizando a latitude e longitude e mostrando somente as lojas que estão no maximo 6,5km.

No geral, a expectativa para o desenvolvimento da API não era tão boa, por não ter experiência de um desenvolvedor pleno, porém tive facilidade em desenvolver a API.

## Desenvolvedor


- [Gabriel Resende](https://github.com/Sprained "Gabriel Resende")


