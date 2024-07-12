import { Router } from "express";
import userController from '../controllers/userController'

const router:Router = Router();

router.post('/register', userController.createUser)
router.get('/get/users', userController.getUser)
router.delete('/delete/user:id', userController.deleteUser)
export default router