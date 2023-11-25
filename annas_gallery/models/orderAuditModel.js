import mongoose from "mongoose";

const OrderAuditSchema = new mongoose.Schema({
  orderid: {
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

export default mongoose.model("orderAudit", OrderAuditSchema);