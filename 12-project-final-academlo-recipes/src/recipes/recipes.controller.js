const { Op } = require("sequelize");

const { uuid } = require("sequelize");
const Recipes = require("../models/recipes.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");
const Instructions = require("../models/instructions.models");
const RecipeIngredients = require("../models/recipes_ingredients.models");
const Ingredients = require("../models/ingredients.models");
const Types = require("../models/types.models");
const UsersIngredients = require("../models/users_ingredients.models");

const getAllRecipes = async () => {
  const data = await Recipes.findAll({
    attributes: {
      //excluidos del json recipes
      exclude: ["userId", "categoryId", "createdAt", "updatedAt"],
    },
    // difere
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Instructions,
        //se omite el id porque no es necesario
        attributes: ["step", "description"],
      },
      {
        //
        model: RecipeIngredients,
        include: {
          model: Ingredients,
          include: {
            model: Types,
          },
        },
      },
    ],
  });
  return data;
};

const getRecipeById = async () => {
  const data = await Recipes.findOne({
    where: {
      id: id,
    },
    attributes: {
      //excluidos del json recipes
      exclude: ["userId", "categoryId", "createdAt", "updatedAt"],
    },
    // difere
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Instructions,
        //se omite el id porque no es necesario
        attributes: ["step", "description"],
      },
      {
        //
        model: RecipeIngredients,
        include: {
          model: Ingredients,
          include: {
            model: Types,
          },
        },
      },
    ],
  });
  return data;
};

const createRecipe = async (data) => {
  const response = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    userId: data.userId,
    categoryId: data.categoryId,
    origin: data.origin,
    likes: data.likes,
  });
  return response;
};

const updateRecipe = async (id, data) => {
  const response = await Recipes.update(data, {
    where: {
      id: id,
    },
  });
  return response;
};

const deleteRecipe = async (id) => {
  const data = await Recipes.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

const getMyRecipes = async (userId) => {
  const userIngredients = await UsersIngredients.findAll({
    attributes: ["ingredientId"],
    where: {
      userId,
    },
  });
  const filteredIngredients = userIngredients.map((obj) => obj.ingredientId);
  const recipeIngredients = await RecipeIngredients.findAll({
    where: {
      ingredientId: {
        [Op.in]: filteredIngredients,
      },
    },
  });

  const filteredRecipes = recipeIngredients.map((obj) => obj.recipeId);

  const data = await Recipes.findAll({
    where: {
      id: {
        [Op.in]: filteredRecipes,
      },
    },
  });

  return data;
};

getMyRecipes("a5fb9110-0b62-43a7-bd91-0445db914c8b")
  .then((data) => console.log(data))
  .catch((data) => console.log(data));

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
