import knex from "knex";
import dbConfig from "./dbConfig.js";

export const dbConn = knex(dbConfig);
