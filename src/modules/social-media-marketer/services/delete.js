import { deleteData } from "../db/index.js"

const deleteUser = async (id) => {
    return await deleteData(id)
} 

export default deleteUser