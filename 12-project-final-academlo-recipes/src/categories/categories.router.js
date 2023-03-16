const router = require("express").Router();

const categoryServices = require("./categories.services");

// /
// /:id

//TODO HACERLE PROTEGIDA POR ADMINISTRADOR CREAR Y ELIMINAR
router
  .route("/")
  .get(categoryServices.getAllCategories)
  .post(categoryServices.postCategory);

router
  .route("/:id")
  .get(categoryServices.getCategoryById)
  .delete(categoryServices.deleteCategory);

module.exports = router;
