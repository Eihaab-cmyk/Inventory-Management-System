import mongoose from "mongoose";

const ProductAuditSchema = new mongoose.Schema({
  productid: {
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

export default mongoose.model("productAudit", ProductAuditSchema);