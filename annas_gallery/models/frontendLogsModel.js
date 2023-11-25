import mongoose from "mongoose";

const frontLogsSchema = new mongoose.Schema({
  ErrorMessage: {
    type: String,
    required: true,
  },
  pageURL: {
    type: String,
    required: true,
  },
  portal: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

export default mongoose.model("frontendlogs", frontLogsSchema);