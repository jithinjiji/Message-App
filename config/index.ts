import constants from './constants'
import { config as loadEnv } from "dotenv";

loadEnv();

const config = {
  PORT: process.env.PORT,
  constants
}

export default config;