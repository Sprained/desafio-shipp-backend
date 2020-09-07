# IMERSÃO PRÁTICA - Zaitt
Projeto realizado para teste de seleção da Zaitt para a vaga de desenvolvedor!

## Tecnologias

##### Api
- NodeJS

##### Banco de dados
- SQLite

## Introdução

O sistema foi feito em NodeJS usando o banco de dados SQLite. Para facilitar a criação do banco de dados apos o desenvolvimento optei por usar a lib Sequelize, assim precisando so passar os comando `npx sequelize db:migrate` ou `yarn sequelize db:migrate` assim o banco de dados.

Iniciando a aplicação

API
Tendo o Node instalado na máquina, abra o terminal na pasta e digite o seguinte comando: `npm run start` ou `yarn start`. Apos inicializar a api para popular o banco de dados basta chamar a rota post `http://localhost:3333/V1/stores` usando o postman ou insominia.

## Comentarios de desenvolvimento

##### API

Para o calculo de distancia foi usando estudado um calculo matematico para mostrar a distancia entre as localizações usando a latitude e longitude e mostrando somente as lojas que estão no maximo 6.5km.

No geral, a expectativa para o desenvolvimento da API não era tão boa, por não ter experiência um desenvolvedor pleno, porem tive facilidade em desenvolver a api.

## Desenvolvedor


- [Gabriel Resende](https://github.com/Sprained "Gabriel Resende")


