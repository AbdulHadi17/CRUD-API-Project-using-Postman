const Product = require('../models/product.model.js');

const addAaProduct = async (req, res) => {

    try {

        const newProduct = req.body;
        if (!newProduct) {
            return res.status(500).json({ succes: true, note: "No Data Given" })
        }
        const products = await Product.create(newProduct);

        res.status(200).json(products);

    } catch (error) {

        return res.status(500).json({ success: false, Error: error.message });

    }

}

const getAllProducts =  async (req, res) => {

    try {

        const allProducts = await Product.find({});

        return res.status(200).json(allProducts);


    } catch (error) {

        return res.status(500).json({ success: false, Error: error.message });


    }

}

const getAProduct =  async (req, res) => {

    try {

        const { id } = req.params;

        if (!id) {
            return res.status(500).json({ success: true, note: "Invalid ID" });
        }

        const getProduct = await Product.findById(id);

        res.status(200).json(getProduct);


    } catch (error) {

        return res.status(500).json({ success: false, Error: error.message });

    }

}

const deleteAProduct =  async (req, res) => {

    try {

        const { id } = req.params;

        if (!id) {
            return res.status(500).json({ success: true, note: "Invalid ID" });
        }

        await Product.findByIdAndDelete(id);

        res.status(200).json({ success: true, note: `Product with Id: ${id} deleted succesfully` });


    } catch (error) {

        return res.status(500).json({ success: false, Error: error.message });

    }

}

const updateAProduct = async (req, res) => {

    try {

        const { id } = req.params;


        if (!id) {
            return res.status(500).json({ success: true, note: "Invalid ID" });
        }

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(500).json({ success: true, note: "No Data Given" });
        }


        const curObject = await Product.findById(id);

        return res.status(200).json(curObject);


    } catch (error) {

        return res.status(500).json({ success: false, Error: error.message });

    }

}

module.exports = {addAaProduct,getAllProducts,getAProduct,deleteAProduct,updateAProduct};