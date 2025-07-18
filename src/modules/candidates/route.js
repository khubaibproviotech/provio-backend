import {Router} from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";
import getByPositionController from "./controllers/getByPosition.js";
import SuperAdminAuth from "../../helper/index.js";

let router = Router()

router.get("/", SuperAdminAuth ,getController)
router.get("/:position" ,getByPositionController)
router.post("/" ,  postController)
router.delete("/:id" ,  deleteController)
router.put("/:id" ,  updateController)

export default router