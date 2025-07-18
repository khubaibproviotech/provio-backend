import { createData } from "../db/index.js";

const createAdmin = async (data) => await createData(data)

export default createAdmin