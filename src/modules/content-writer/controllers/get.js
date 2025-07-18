import getData from "../services/get.js"
import { getByField } from "../db/index.js"
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"

let getController = async (req, res) => {
    try{
        let q = req.query;
        let obj = JSON.stringify(q);
        if (obj != "{}") {
            const users = await getByField(q);
            res.status(200).send({ status: 200, data: users });
        } else {
            const users = await getData()
            return res.status(200).send({status: 200, data: users})
        }
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}


export default getController