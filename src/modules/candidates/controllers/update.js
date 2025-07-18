import updateCandidate from "../services/update.js"

let updateController = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = await updateCandidate(id, req.body);
        res.status(200).send({ status: 200, data: updatedData });
    } catch (err) {
        console.log(err);   
        res.status(500).send({ status: 500, message: UPDATE_DATA_MESSAGE });
    }
};

export default updateController
