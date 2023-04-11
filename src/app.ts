import { json, urlencoded } from 'body-parser';
import express from 'express';
import router from './router';
const app = express();

app.use(json({ limit: "10mb" }));
app.use(urlencoded({ extended: true }))
app.use(router)

export default app;