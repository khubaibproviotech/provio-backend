import { Schema } from "mongoose";
import mongoose from "mongoose";

const dataSchema = new Schema({
    field: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const Model = mongoose.model("Positions", dataSchema);

export default Model;