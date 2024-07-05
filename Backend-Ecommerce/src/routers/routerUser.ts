import { Router } from "express";
import userController from '../controllers/userController'

const router:Router = Router();

router.get('/get/users', userController.getUser)


export default router