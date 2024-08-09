import inventoryController from "../controllers/inventoryController";
import { Router } from "express";
import { auth } from "../middlewares/auth";

const router:Router = Router()

router.get('/get/inventory', auth, inventoryController.getInventory)
router.put('/get/one/inventory', auth, inventoryController.getOneInventory)
router.put('/update/inventory', auth, inventoryController.updateInventory)
router.delete('/delete/inventory/:id', auth, inventoryController.deleteInventory)
router.post('/create/inventory', auth, inventoryController.createInventory)


export default router