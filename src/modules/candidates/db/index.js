import Model from "../models/index.js";


const getAll = async () => await Model.find();

const getByField = async (query) => await Model.find(query);

const addData = async (data) => await Model.create(data);

const updateData = async (id, data) => await Model.findByIdAndUpdate(id, data);

const deleteData = async (id) => await Model.findByIdAndDelete(id);

const getDataById = async (id) => await Model.findById(id);

export {
    getAll,
    getByField,
    addData,
    updateData,
    deleteData,
    getDataById
}
