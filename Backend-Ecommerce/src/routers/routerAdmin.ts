import { Router } from "express";
import adminController from '../controllers/adminController'
import { authAdmin } from "../middlewares/auth";

const router:Router = Router()

router.post('/create/admin', adminController.createAdmin)
router.post('/login/admin', adminController.login)
router.get('/home/admin', authAdmin, (_req, res)=>{
    const user = res.locals.user;
    res.json({ message: `Welcome ${user.username}` });
}) // Esto es para verificar la protección de la ruta
router.post('/logout/admin', authAdmin, adminController.logout)
router.put('/update/admin/:id', authAdmin, adminController.updateAdmin)
router.get('/get/admins', adminController.getAdmins)
router.delete('/delete/admin/:id', authAdmin ,adminController.deleteAdmin)

export default router