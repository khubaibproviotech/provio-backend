import { DELETE_DATA_MESSAGE } from "../../../constants/index.js"
import deleteUser from "../services/delete.js";



let deleteController = (req, res) => {
    try {
        let {id} = req.params;
        
    } catch (err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, DELETE_DATA_MESSAGE})
    }
} 


export default deleteController