// service layer buat handle bussines logic 

import { findProduct , findProductById , insertProduct , deleteProduct, editProduct} from './product.repository.js'

export const getAllProduct = async () => {
    const products = await findProduct()

    return products
}

export const getProductByid = async (id) => {
    if(typeof id !== "number"){
        throw Error('ID is not a number')
    }

    const product = await findProductById(id)

    if(!product){
    throw Error('Product not found')
    }

    return product;
}

export const createProduct = async (newProductData) => {

    await insertProduct(newProductData)

}

export const deleteProductById = async (id) => {
   
    await getProductByid(id)

    await deleteProduct(id)
}

export const editProductById = async (id, newProductData) => {

    await getProductByid(id)
    
    const product = await editProduct(id,newProductData)

    return product
}