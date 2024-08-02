import { Router } from "express";
import adminController from '../controllers/adminController'
import { auth } from "../middlewares/auth";
const router:Router = Router()

router.post('/create/admin', adminController.createAdmin)
router.post('/login/admin', adminController.login)
router.get('/home/admin', auth, (_req, res)=>{
    if (res.locals.user.role !== 'admin') {
        res.status(403).json({ message: 'Forbidden' });
        return 
      }
      res.json({message: 'Bienvenido'})
}) // Esto es para verificar la protección de la ruta
router.post('/logout/admin', auth, adminController.logout)
router.put('/update/admin/:id', auth, adminController.updateAdmin)
router.get('/get/admins', auth, adminController.getAdmins)
router.delete('/delete/admin/:id', auth ,adminController.deleteAdmin)

export default router