import { INTERNAL_SERVER_ERROR_MESSAGE, POST_DATA_MESSAGE } from "../../../constants/index.js"
import createAdmin from "../services/post.js"


const postController = async (req , res) => {
    try {
        const data = await createAdmin(req.body);
        res.status(200).send({status: 200, data: POST_DATA_MESSAGE});
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).send({status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE})
    }
}

export default postController