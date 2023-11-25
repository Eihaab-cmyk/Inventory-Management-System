import userAuditModel from "../models/userAuditModel.js";

export const authAudit = async (userid, action, oldValue, newValue) => {
    
    const audit = new userAuditModel({userid,action,oldValue,newValue});
    await audit.save();

    return;
  };