import prisma from '../db/index.js'

export const findProduct = async () => {
    const products = await prisma.product.findMany()

    return products
}

export const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where:{
            id,
        }
    })
    return product;
}

export const insertProduct = async (newProductData) => {

    const products = await prisma.product.create({
        data:{
            name : newProductData.name,
            price : newProductData.price,
            description : newProductData.description,
            image : newProductData.image,
        }
    })
    return products;
}

export const deleteProduct = async (id) => {
    
    await prisma.product.delete({
        where:{
            id,
        }
    }) 

}

export const editProduct = async (id, newProductData) => {
    const product = await prisma.product.update({
        where:{
            id,
        },
        data:{
            name : newProductData.name,
            price : newProductData.price,
            description : newProductData.description,
            image : newProductData.image,
        }
      })
      return product
}