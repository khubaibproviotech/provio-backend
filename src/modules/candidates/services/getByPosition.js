import {getByField} from "../db/index.js"

let getByPosition = async (position) => {
    let users = await getByField({ position :position });
    return users;
}

export default getByPosition


