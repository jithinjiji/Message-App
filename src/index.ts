import {config} from "dotenv"
import { migrateDatabase } from "../config/db";
import app from "./app";

config();
const port = 3000;


migrateDatabase().then(() => {
  app.set("port", port)
  app.listen(() => {
    return console.log(`Express is listening at http://localhost:${port}`);
  })
}).catch((e)=> {
  console.log(`Migration failed:`, e);
})