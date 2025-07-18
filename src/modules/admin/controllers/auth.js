import matchAdmin from "../services/auth.js"
import { BAD_AUTH, INTERNAL_SERVER_ERROR_MESSAGE, PASSWORD_INCORRECT } from "../../../constants/index.js"


const authController = async (req , res) => {
    try {
        let data = await matchAdmin(req.body)
        if (data != BAD_AUTH || data != PASSWORD_INCORRECT) {
            res.status(200).send({status: 200, data: data})
        } else{
            res.status(401).send({status: 401, message: data})
        }
    }catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}

export default authController