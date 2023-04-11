import appConfig from "../config"
import { migrateDatabase } from "../config/db";
import app from "./app";

migrateDatabase().then(() => {
  app.listen(appConfig.PORT,() => {
    return console.log(`Express is listening at http://localhost:${appConfig.PORT}`);
  })
}).catch((e)=> {
  console.log(`Migration failed:`, e);
})