import {Router} from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";
import getByIdController from "./controllers/getById.js";


let router = Router()

router.get("/" ,  getController)
router.get("/:id", getByIdController)
router.post("/" ,  postController)
router.delete("/:id" ,  deleteController)
router.put("/:id" ,  updateController)

export default router