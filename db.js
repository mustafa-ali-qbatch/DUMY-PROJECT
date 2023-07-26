
import * as pg from 'pg';
import { Sequelize } from 'sequelize';
console.log('process.env.DB_NAME', process.env.DB_NAME,  process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,  process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: "postgres",
  dialectModule: pg,
  port: 5432
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;