import {v2 as cloudinary} from "cloudinary"
import { json } from "express";
import productMOdel from "../models/productModel.js";

// add product

const addProduct = async (req,res)=>{
    try {
        const {name, description, category, subCategory, bestSeller, sizes, price} = req.body;
        const image1 =req.files.image1 && req.files.image1[0]
        const image2 =req.files.image2 && req.files.image2[0]
        const image3 =req.files.image3 && req.files.image3[0]
        const image4 =req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter(item => item !== undefined)
        const imagesUrl = await Promise.all(
            images.map( async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'})
                return result.secure_url
            })
        )
        const productData = {
            name, 
            description, 
            category, 
            subCategory, 
            bestSeller: bestSeller === "true" ? true : false, 
            sizes: JSON.parse(sizes), 
            price: Number(price),
            images : imagesUrl,
            date:Date.now()
        }

        const product = new productMOdel(productData)
        await product.save()

        res.json({
            success:true,
            message: "product data added successfully"
        })


        console.log(productData)
        // console.log(name, description, category, subCategory, bestSeller, sizes, price);
        // console.log(image1)
        // console.log(image2)
        // console.log(image3)
        // console.log(image4)
        // console.log(req.body)
        // console.log(imagesUrl)

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

// all product 

const allProducts = async (req, res) =>{

}

//remove product

const removeProduct = async(req, res) =>{

}

// single product 

const singleProduct = async(req, res)=>{

}

export {addProduct, allProducts, removeProduct, singleProduct}