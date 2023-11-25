import orderAuditModel from "../models/orderAuditModel.js";

export const orderAudit = async (orderid, action, oldValue, newValue) => {
    
    const audit = new orderAuditModel({orderid,action,oldValue,newValue});
    await audit.save();

    return;
  };