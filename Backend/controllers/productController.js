

// add product

const addProduct = async (req,res)=>{
    try {
        const {name, description, category, subCategory, bestSeller, sizes, price} = req.body;
        const image1 = req.files.image1[0]
        const image2 = req.files.image1[0]
        const image3 = req.files.image1[0]
        const image4 = req.files.image1[0]
        

    } catch (error) {
        
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