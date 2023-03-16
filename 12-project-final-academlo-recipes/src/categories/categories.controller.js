const { uuid } = require("sequelize");
const Categories = require("../models/categories.models");

// ver todas las categorias
//ver una categoria en especifica
//crear categoria
// eliminar categoria

const getAllCategories = async () => {
  const data = Categories.findAll();

  return data;
};

const getCategoryById = async (id) => {
  const data = await Categories.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createCategory = async (name) => {
  const data = await Categories.create({
    name,
  });
  return data;
};

const deleteCategory = async (id) => {
  const data = Categories.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
