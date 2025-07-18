import updateAdmin from "../services/update.js"
import { UPDATE_DATA_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"




const updateController = (req , res) => {
    try {
        let {id} = req.params;
        let data = updateAdmin(id, req.body);
        res.status(200).send({status: 200, message: UPDATE_DATA_MESSAGE})
    } catch(err){
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}

export default updateController