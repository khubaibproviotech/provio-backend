import getByPosition from "../services/getByPosition.js";
import {getByField} from "../db/index.js";
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"


const getByPositionController = async (req, res) => {
    try {
        let { position } = req.params;
        let q = req.query;
        let obj = JSON.stringify(q); 
        // console.log(q, position)
        if (obj != "{}") {
            if (q.createdAt) {
                q.createdAt = JSON.parse(q.createdAt)
                q.createdAt.$gte = new Date(q.createdAt.$gte)
                q.createdAt.$lte = new Date(q.createdAt.$lte)
            }
            const users = await getByField({"position" :position, ...q});
            res.status(200).send({ status: 200, data: users });
        } else {
            let users = await getByPosition(position);
            return res.status(200).send({ status: 200, data: users });
        }
    } catch (err) {
        console.log(`Error: ${err}`);
        res
          .status(500)
          .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
};

export default getByPositionController
