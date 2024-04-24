const router = require("express").Router();
const categoryController = require("../controller/CategoryController");
router.get("/category", categoryController.getCategories);
router.post("/category", categoryController.createCategory);
module.exports = router;