import {deleteData} from "../db/index.js";


const deleteCandidate = async (id) => await deleteData(id);

export default deleteCandidate

