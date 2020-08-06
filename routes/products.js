
const productsRouter = require('express').Router();
const {getConfig,postConfig,putConfig,deleteConfig,postImage} = require('../services/config')
const response = require('../services/response')
const upload = require('../services/multer')
const name = "products"

productsRouter.route('/products')
    .get(
        (req,res)=>{
            response(getConfig(name),res)
        }
    )
    .post(
        (req,res)=>{
            response(postConfig(name,req),res)
        }
    )
    .put(
        (req,res)=>{
            response(putConfig(name,req),res)
        }
    ) 
    .delete(
        (req,res)=>{
            response(deleteConfig(name,req),res)
        }
    )   
    
productsRouter.route("/insert").post(
    (req,res) => {

        upload(req,res
            ,(err) => {
            if(err){
                console.log(err)    
            }
            else{
                let query = postImage(name,req)
                // console.log(query);
                response(query,res)
            }
            })

        // let query = postImage(name,req)
        // response(query,res)
        
    })



module.exports = productsRouter;
