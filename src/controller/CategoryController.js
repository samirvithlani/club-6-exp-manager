const categorySchema = require("../model/CategoryModel");

const createCategory = async (req, res) => {
    console.log(req.body)
  try {
    const savedCategory = await categorySchema.create(req.body);
    res.status(201).json({
      message: "Category created successfully",
      data: savedCategory,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find();
    if (categories && categories.length > 0) {
      res.status(200).json({
        message: "Categories fetched successfully",
        data: categories,
      });
    } else {
      res.status(404).json({
        message: "No categories found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
