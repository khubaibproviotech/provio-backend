import postData from "../services/post.js";
import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";

let postController = async (req, res) => {
  try {
    let data = await postData(req.body);
    res.status(200).send({ satus: 200, data: data });
  } catch (err) {
    console.log(`Error: ${err}`);
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
};

export default postController;
