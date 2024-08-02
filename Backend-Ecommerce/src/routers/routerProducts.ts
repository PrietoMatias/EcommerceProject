import { Router } from "express";
import productsControllers from '../controllers/productsController'
import { auth} from "../middlewares/auth";

const router = Router()

router.post('/create/product', productsControllers.createProduct)
router.get('/get/products', auth, productsControllers.getAllProducts)
router.put('/update/products/:id', auth, productsControllers.updateByID)
router.post('/get/product', auth, productsControllers.getByName)
router.get('/get/product/:id', auth, productsControllers.getByID)
router.delete('/delete/products/:id', auth, productsControllers.deleteById)


export default router;