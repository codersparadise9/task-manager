import {NextFunction,Request,Response} from "express";
import {AbstractError} from "../errors/interfaces/abstract.error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) =>{

    if(err instanceof AbstractError) {
        return res.status(err.statusCode).send({errors:err.serializeErrors()})
    }

    console.log("Something went wrong");
    res.status(400).send({
        message:'Something went wrong'
    })
}