import getData from "../services/get.js";
import { getByField } from "../db/index.js";
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";

let getController = async (req, res) => {
  try {
    let q = req.query;
    let obj = JSON.stringify(q);
    if (obj != "{}") {
      console.log(q)
      if (q.createdAt) {
        q.createdAt = JSON.parse(q.createdAt)
        q.createdAt.$gte = new Date(q.createdAt.$gte)
        q.createdAt.$lte = new Date(q.createdAt.$lte)
      }
        const users = await getByField(q);
        res.status(200).send({ status: 200, data: users });
    } else {
        const users = await getData()
        return res.status(200).send({status: 200, data: users})
    }

    // const users = await getData()
    // res.status(200).send({status: 200, data: users})
  } catch (err) {
    console.log(`Error: ${err}`);
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
};

export default getController;
