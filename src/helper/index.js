import * as jose from "jose";
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../constants/index.js";

const SuperAdminAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jose.decodeJwt(token);
        const role = payload.isUser._doc.role;
        console.log(role)
        if (role === "SuperAdmin") {
            next()
        } else {
            res.status(401).send({status: 401, message: "Unauthorized"})
        }
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    } 
}

export default SuperAdminAuth
