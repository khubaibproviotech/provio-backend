import {updateData} from "../db/index.js";

const updateCandidate = async (id, data) => await updateData(id, data);

export default updateCandidate
