import updateData from "../services/update.js";
import { UPDATE_DATA_MESSAGE } from "../../../constants/index.js";

let updateController = async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await updateData(id, req.body);
    res.status(200).send({ status: 200, data: updatedData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: 500, message: UPDATE_DATA_MESSAGE });
  }
};

export default updateController;
