import mongoose from "mongoose";

const CategoryAuditSchema = new mongoose.Schema({
  categoryid: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  oldValue: {
    type: Object,
    required: true,
  },
  newValue: {
    type: Object,
    required: true,
  },
},
{ timestamps: true }
);

export default mongoose.model("categoryAudit", CategoryAuditSchema);