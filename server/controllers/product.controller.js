const { response } = require("express");
const { model } = require("mongoose");
const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello world!"
    });
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Error with retrieving all products", error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Product.find({ _id: req.params.id })
        .then(oneProduct => res.json({product: oneProduct }))
        .catch(err => res.json({ message: "Error with retrieving single product", error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Error with deleting Product", error: err }));
}

module.exports.editProduct = (req, res) =>{
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Error with editing product", error: err}));
}