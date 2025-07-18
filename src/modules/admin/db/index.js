import Model from "../models/index.js";
import bcrypt from "bcrypt";
import { PASSWORD_INCORRECT, BAD_AUTH } from "../../../constants/index.js";
import * as jose from "jose"
import { ENV } from "../../../constants/index.js";



const getData = async () => Model.find();


const createData = async (data) => new Model(data).save().then((admin) => admin.toObject());


const deleteData = async (id) => await Model.findByIdAndDelete(id);


const updateData = async (id, data) => await Model.findByIdAndUpdate(id, data);




const matchData = async (data) => {
  let isUser = await Model.findOne({ username: data.username });
  if (isUser) {
    let isValid = bcrypt.compareSync(data.password, isUser.password);
    if (isValid) {

        let secret = new TextEncoder().encode(ENV.secret)
        let token = await new jose.SignJWT({isUser}).setIssuedAt().setProtectedHeader({alg: ENV.alg}).setExpirationTime("1h").sign(secret)
      return {auth: token};
    } else {
      return PASSWORD_INCORRECT;
    }
  } else {
    return BAD_AUTH
  }
};




export { getData, createData, deleteData, updateData, matchData };
