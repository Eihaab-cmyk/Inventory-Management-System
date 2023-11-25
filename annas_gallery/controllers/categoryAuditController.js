import categoryAuditModel from "../models/categoryAuditModel.js";

export const categoryAudit = async (categoryid, action, oldValue, newValue) => {
    
    const audit = new categoryAuditModel({categoryid,action,oldValue,newValue});
    await audit.save();

    return;
  };