import deleteCandidate from "../services/delete.js"

let deleteController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteCandidate(id);
        res.status(200).send({ status: 200, data: deleted });
    } catch (err) {
        console.log(`Error: ${err}`);
        res
          .status(500)
          .send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
};

export default deleteController
