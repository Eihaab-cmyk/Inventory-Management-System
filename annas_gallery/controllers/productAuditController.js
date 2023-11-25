import productAuditModel from "../models/productAuditModel.js";

export const productAudit = async (productid, action, oldValue, newValue) => {
    
    const audit = new productAuditModel({productid,action,oldValue,newValue});
    await audit.save();

    return;
  };