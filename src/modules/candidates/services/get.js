import { getAll } from "../db/index.js";

let getData = async () => {
    let users = await getAll();
    return users;
}

export default getData

