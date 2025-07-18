import Model from "../models/index.js";

const getAll = async () => await Model.find();

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
    addData,
    updateById,
    deleteData,
}

