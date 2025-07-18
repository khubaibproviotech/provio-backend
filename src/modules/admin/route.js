import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import updateController from "./controllers/update.js";
import deleteController from "./controllers/delete.js";
import bcrypt from "bcrypt"
import authController from "./controllers/auth.js";

let router = Router()

const encryppPassword = (req, res, next) => {
    let {username, password} = req.body
    const hash = bcrypt.hashSync(password, 10);
    req.body.password = hash
    next()
}

router.post("/auth", authController)
router.get("/", getController)
router.post("/", encryppPassword, postController)
router.put("/:id", updateController)
router.delete("/:id", deleteController)


export default router