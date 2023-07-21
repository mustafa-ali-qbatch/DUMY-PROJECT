// import { Sequelize } from 'sequelize'
// console.log('process.env.DB_NAME', process.env.DB_NAME,  process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST)
// const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   dialect: 'postgres',
//   logging: false,
//   host: process.env.DB_HOST,
// })
// console.log('connection:', connection)
// connection
//   .authenticate()
//   .then(() => {
//     console.log('connection:', connection)
//   })
//   .catch((e) => console.log('connection: error', e))

// export {
//   connection
// }
import * as pg from 'pg';
import { Sequelize } from 'sequelize';
console.log('process.env.DB_NAME', process.env.DB_NAME,  process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,  process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: "postgres",
  dialectModule: pg,
  port: 5432
});
// const sequelize = new Sequelize('postgres://postgres:anosh12@localhost:5433/dbname');

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;