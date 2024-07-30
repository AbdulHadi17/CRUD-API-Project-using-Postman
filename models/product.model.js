const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {

        "name":{
            type:String,
            required: [true,"Please Write a Name"]
        },

        "quantity":{
            type:Number,
            value:0,
            required:true
        },

        "price":{
            type:Number,
            value:0,
            required:true
        }

    })

    const Product = mongoose.model('Products' , productSchema);

    module.exports = Product;