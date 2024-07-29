import { Router } from "express";
import userController from '../controllers/userController'
import { authUser } from "../middlewares/auth";

const router:Router = Router();

router.post('/register', userController.createUser)
router.get('/get/users', userController.getUser)
router.delete('/delete/user:id', authUser, userController.deleteUser)
router.put('/user/update/:id', authUser, userController.updateUser)
router.post('/user/login', userController.login)
router.post('/user/logout', authUser, userController.logout)
export default router