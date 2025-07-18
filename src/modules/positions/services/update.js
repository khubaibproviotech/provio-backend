import {updateById} from "../db/index.js"

const updatePosition = async (id, data) => {
    return await updateById(id, data)
}

export default updatePosition
