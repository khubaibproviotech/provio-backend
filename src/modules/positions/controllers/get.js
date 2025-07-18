import getPosition from "../services/get.js"
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"

let getController = async (req, res) => {
    try {
        let data = await getPosition()
        res.status(200).send({ status: 200, data: data })
    } catch (err) {
        console.log(`Error: ${err}`)
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE })
    }
}

export default getController
