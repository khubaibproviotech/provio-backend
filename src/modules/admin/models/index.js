import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        
    }
});

const Model = mongoose.model("Admin", dataSchema);

export default Model;
