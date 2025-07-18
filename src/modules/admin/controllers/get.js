import getAllAdmin from "../services/get.js"
import { INTERNAL_SERVER_ERROR_MESSAGE, BAD_AUTH, PASSWORD_INCORRECT } from "../../../constants/index.js"

const getController = async (req , res) => {
    try {
        let data = await getAllAdmin()
        res.status(200).send({status: 200, data: data})
       
    }catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}

export default getController