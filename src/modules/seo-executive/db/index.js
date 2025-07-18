import Model from "../models/index.js";


const getAll = async () => await Model.find();

const getById = async (id) => await Model.findById(id)

const getByField = async (query) => await Model.find(query);

const addData = async (data) => {
    return new Model(data).save().then((user) => user.toObject());
}

const updateById = async (id, data) => {
    return Model.findByIdAndUpdate(id, data);
}

const deleteData = async (id) => {
    return Model.findByIdAndDelete(id)
}

export {
    getAll,
    getById,
    getByField,
    addData,
    updateById,
    deleteData,
}