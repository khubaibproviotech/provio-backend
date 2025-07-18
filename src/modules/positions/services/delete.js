import {deleteData} from "../db/index.js"

const deletePosition = async (id) => {
    return await deleteData(id)
}

export default deletePosition
