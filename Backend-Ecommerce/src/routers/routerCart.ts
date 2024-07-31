import { Router } from "express";
import cartController from "../controllers/cartController";
import { authUser } from "../middlewares/auth";

const router:Router = Router()

router.post('add/cart/', authUser, cartController.addCart)

export default router