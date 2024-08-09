import supplierController from '../controllers/suppliersController'
import {Router} from 'express'
import { auth } from '../middlewares/auth'


const router:Router = Router()

router.get('/get/supplier', auth, supplierController.getSuppliers)
router.post('/search/supplier', auth, supplierController.searchSupplier)
router.put('/update/supplier', auth, supplierController.updateSupplier)
router.delete('/delete/supplier/:id', auth, supplierController.deleteSupplier)


export default router