import categoryModel from "../models/categoryModel.js"
import slugify from "slugify";
import { categoryAudit } from './categoryAuditController.js';
import { saveLogs } from "./backendLogsController.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exisits",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    categoryAudit(category._id,"INSERT","-",category);
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    saveLogs(error.message,"/admin/create-category","POST")
    console.log(error);
    res.status(500).send({
      success: false,
      errro,
      message: "Error in Category",
    });
  }
};

//update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const oldValue = await categoryModel.find({_id:id});
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    ); 
    categoryAudit(id,"UPDATE",oldValue[0],category);
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    saveLogs(error.message,"admin/update-category/:id","PUT")
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

// get all cat
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    saveLogs(error.message,"/get-category","GET")
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single Category Successfully",
      category,
    });
  } catch (error) {
    saveLogs(error.message,"/single-category/:slug","GET")
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

//delete category
export const deleteCategoryCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    const oldValue = await categoryModel.find({_id:id});
    await categoryModel.findByIdAndDelete(id);
    categoryAudit(id,"DELETE",oldValue[0],"-");
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    saveLogs(error.message,"admin/delete-category/:id","DELETE")
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};