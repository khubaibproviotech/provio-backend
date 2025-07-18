import {addData} from "../db/index.js"

const addPosition = async (data) => {
    return await addData(data)
}

export default addPosition