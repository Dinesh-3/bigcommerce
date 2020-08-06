
const customersRouter = require('express').Router();
const {getConfig,postConfig,putConfig,deleteConfig} = require('../services/config')
const response = require('../services/response')
const name = "customers"

customersRouter.route('/customers')
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

module.exports = customersRouter;