import addCandidate from "../services/post.js"

let postController = async (req, res) => {
    try {
        const added = await addCandidate(req.body);
        res.status(200).send({ status: 200, data: added });
    } catch (err) {
        console.log(`Error: ${err}`);
        res
          .status(500)
          .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
};

export default postController
