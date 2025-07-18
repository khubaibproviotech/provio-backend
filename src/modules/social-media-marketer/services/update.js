import { updateById } from "../db/index.js";

let updateData = async (id, data) => {
  return await updateById(id, data);
};

export default updateData;
