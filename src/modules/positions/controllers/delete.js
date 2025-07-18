import deletePosition from "../services/delete.js"
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js"

let deleteController = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedData = await deletePosition(id);
        res.status(200).send({ status: 200, data: deletedData });
    } catch (err) {
        console.log("Error : ", err);
        res
          .status(500)
          .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
};

export default deleteController