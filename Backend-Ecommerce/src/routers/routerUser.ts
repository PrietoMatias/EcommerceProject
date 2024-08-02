import { Router } from "express";
import userController from '../controllers/userController'
import { auth } from "../middlewares/auth";

const router:Router = Router();

router.post('/register', userController.createUser)
router.get('/get/users', userController.getUser)
router.delete('/delete/user/:id', auth, userController.deleteUser)
router.put('/user/update/:id', auth, userController.updateUser)
router.post('/user/login', userController.login)
router.post('/user/logout', auth, userController.logout)
export default router