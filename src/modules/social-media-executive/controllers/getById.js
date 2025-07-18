import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";
import { getById } from "../db/index.js";

let getByIdController = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await getById(id);
    res.status(200).send({ status: 200, data: data });
  } catch (err) {
    console.log("Error : ", err);
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
};

export default getByIdController;
