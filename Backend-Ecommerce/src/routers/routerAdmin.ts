import { Router } from "express";
import adminController from '../controllers/adminController'
import { authAdmin } from "../middlewares/auth";

const router:Router = Router()

router.post('/create/admin', adminController.createAdmin)
router.post('/login/admin', adminController.login)
router.get('/home/admin', authAdmin, (_req, res)=>{
    const user = res.locals.user;
    res.json({ message: `Welcome ${user.username}` });
})

export default router