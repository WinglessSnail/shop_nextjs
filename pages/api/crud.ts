import { NextApiRequest, NextApiResponse } from "next";
import { FC } from "react";
import data from "../../database/porducts.json"
import { IProduct } from "../../interfaces/product";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "POST"){

        //create new product
        const {title , description , img , price , off , favestate} = req.body
        const newId = data.length + 1
        const newProduct = {newId , ...req.body}
        data.push(newProduct)
        
        res.status(201).send({message : "post method. your new added product", newProduct})
        return
    
    }else if(req.method === "GET"){
    
        //get data
    
        res.status(200).send({message : "get method" , data})
        return
    
    }else if(req.method === "DELETE"){
    
        //delete a product using id 
        const {id} = req.body
        const deleteProduct = data.find((product)=> product.id === id) 
        

        res.status(200).send({message : "delete method", deleteProduct})
        return
    
    }else if(req.method === "PUT"){
    
        //update existing product 
        const {id , title , description , img , price , off , favestate} = req.body
        let product = data.find((product)=> product.id === id) 
        console.log(product);
        product = {...req.body}
        console.log(product);
    
        res.status(200).send({message : "put method" , product})
        return
    
    }else{ 
        res.status(405).send({message : "your request type is not allowed"})
    }
}

