import { DELETE_DATA_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"
import deleteAdmin from "../services/delete.js"

const deleteController = (req , res) => {
    try {
        let {id} = req.params;
        let data = deleteAdmin(id);
        res.status(200).send({status: 200, message: DELETE_DATA_MESSAGE})
    }catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}

export default deleteController