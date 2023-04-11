import { Router } from "express";
import messageRouter from "./message";

const router: Router = Router();

router.use(messageRouter);

export default router;