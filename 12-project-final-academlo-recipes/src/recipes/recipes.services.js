const recipeControllers = require("./recipes.controller");

const getAllRecipes = (req, res) => {
  recipeControllers
    .getAllRecipes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(200).json({ message: err.message }));
};

// /api/v1/recipe/2/ingredients/8
//router.get('/api/v1/recipe/:recipe_id/ingredients/:ingredient_id/')

//en la variable recipe_id es la misma que va en el path de recipesrouter
const getRecipeById = (req, res) => {
  const id = req.params.recipe_id;

  recipeControllers
    .getRecipeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "INVALID ID", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  //likes no va porque tiene defaultValue
  //userId tampoco va porque cuando se ejecuta el servidor el user Id existe campos obligatorios
  const userId = req.user.id;
  const { title, description, urlImg, time, portions, categoryId, origin } =
    req.body;

  if (title && description && time && portions && categoryId && origin) {
    recipeControllers
      .createRecipe({
        title,
        description,
        urlImg,
        time,
        portions,
        categoryId,
        origin,
        userId,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "MISSING DATA",
      fields: {
        title: "string",
        description: "string",
        time: "number",
        portions: "number",
        categoryId: "number",
      },
    });
  }
};

const patchRecipe = (req, res) => {
  const { title, description, urlImg, time, portions, categoryId, origin } =
    req.body;

  const id = req.params.recipe_id;

  //limitar los campos
  recipeControllers
    .updateRecipe(id, {
      title,
      description,
      urlImg,
      time,
      portions,
      categoryId,
      origin,
    })
    .then((data) => {
      //cuando recibimos en data un 0 es porque la condicional del where no se cumplio , no encontro ninguna coincidencia que le pasamos el controlador
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Recipe with ID: ${id} edite succesfully` });
      } else {
        res.status(404).json({ message: "INVALID ID", id });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const deleteRecipe = (req, res) => {
  const id = req.params.recipe_id;

  recipeControllers
    .deleteRecipe(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "invalid id", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  patchRecipe,
  deleteRecipe,
};
