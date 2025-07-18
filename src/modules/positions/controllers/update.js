import updatePosition from "../services/update.js"
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"

let updateController = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = await updatePosition(id, req.body);
        res.status(200).send({ status: 200, data: updatedData });
    } catch (err) {
        console.log("Error : ", err);
        res
          .status(500)
          .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
};

export default updateController
