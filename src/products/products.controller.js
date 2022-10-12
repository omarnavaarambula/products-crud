const uuid = require("uuid");
const products = require("../models/products.models");

const getAllProducts = () => {
    const data = products.findAll();
    return data;
};

const createProducts = async (data) => {
    const newProduct = await products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable,
    });

    return newProduct;
};

const getProductsById = async (id) => {
    const data = DB.fine((task) => task.id === id);
    return data;
};

const editProduct = async (id, data) => {
    const response = await products.update(data, {
        where: {
            id: id,
        },
    });
    return response;
};

const deleteProduct = async (id) => {
    const data = await products.destroy({
        where: {
            id: id,
        },
    });
    return data;
};

module.exports = {
    getAllProducts,
    createProducts,
    getProductsById,
    editProduct,
    deleteProduct,
};
