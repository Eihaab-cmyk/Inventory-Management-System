import backendLogsModel from "../models/backendLogsModel.js";

export const saveLogs = async (ErrorMessage, pageURL,request) => {
    
    const log = new backendLogsModel({ErrorMessage,pageURL,request});
    await log.save();

    return;
  };