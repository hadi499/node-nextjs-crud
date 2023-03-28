import { Sequelize } from "sequelize";

const db = new Sequelize("next_db", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
