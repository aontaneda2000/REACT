const router = require("express").Router();

/* ======================= */
//importacion de passport para ruta protegida
const passport = require("passport");
//importacion de middelware + ejecutar passport
require("../middlewares/auth.middleware")(passport);
/* ======================= */

//importacion de servicios
const recipeServices = require("./recipes.services");

// /recipes
// /recipes/:recipe_id

// verbos https
router
  .route("/")
  .get(recipeServices.getAllRecipes)
  //ruta protegida
  .post(
    passport.authenticate("jwt", { session: false }),
    recipeServices.createRecipe
  );

router
  .route("/:recipe_id")
  .get(recipeServices.getRecipeById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    recipeServices.patchRecipe
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    recipeServices.deleteRecipe
  );

module.exports = router;
