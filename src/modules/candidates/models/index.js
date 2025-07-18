import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
  position: {
    type: String,
    required: true,
  },
  interview_date: {
    type: String,
  },
  full_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  current_salary: {
    type: Number,
    
  },
  desired_salary: {
    type: Number,
    
  },
  expected_date: {
    type: String,
    
  },
  company_name: {
    type: String,
    
  },
  position_held: {
    type: String,
    
  },
  status: {
    type: String,
    required: true
  }
});

const Model = mongoose.model("Candidates", dataSchema);

export default Model;
