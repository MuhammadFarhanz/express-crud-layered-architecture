// layer untuk handle request dan response

import express from 'express';
import  { getProductByid ,getAllProduct, createProduct, deleteProductById, editProductById} from './product.service.js';

const router = express.Router()

router.get("/", async (req,res) => {
    const products = await getAllProduct()

    res.send(products)
})

router.get("/:id", async (req,res) => {
  try {
    const productId = parseInt(req.params.id)

    const product = await getProductByid(productId)

    res.send(product)
  }catch(err){
    res.status(400).send(err.message)
  }

})

router.post("/", async (req,res) => {
 try{
    const newProductData = req.body;

    const products = await createProduct(newProductData)

    res.send({
        data : products,
        message : "created product sucessfully"
    })
 }catch(err){
    res.status(400).send(err.message)
 }

})

router.delete("/:id", async(req, res) => {
 try {
    const productId = parseInt(req.params.id)

    await deleteProductById(productId) 

    res.send({
        message : "product deleted succesfully"
    })
 }catch(err){
    res.status(400).send(err.message)
 }

})

router.put("/:id", async(req,res) => {

  try {
    const productId = parseInt(req.params.id);
    const newProductData = req.body;
  
    if(!(newProductData.name && newProductData.price && newProductData.description &&  newProductData.image)){
        return res.status(400).send('some field are missing');
    }
    
    const product = await editProductById(productId,newProductData)

    res.send({
      data: product,
      message: "product edited successfully"
    })

 } catch (err) {
    res.status(400).send(err.message)
 }
 

})

router.patch("/:id", async(req,res) => {
 try {
    const productId = parseInt(req.params.id);
    const newProductData = req.body;
  
    const product = await editProductById(productId,newProductData)

    res.send({
      message: "product edited successfully"
    })

 } catch (error) {
    res.status(400).send(err.message)
 }
})

export default router;