import {NextFunction,Request,Response, Router} from "express";
import {TaskRepository} from "../repositories/task.repository";

const taskRoutes = Router();


const repository = new TaskRepository();
taskRoutes.get('/',(req:Request, res:Response, next:NextFunction)=>{
    const result = repository.find();
    res.status(200).json(result);
})
taskRoutes.get("/:id",(req:Request, res:Response, next:NextFunction)=>{
    const id = req.params.id;
    res.status(200).json(repository.findByID(id))
})
taskRoutes.post("/",(req:Request, res:Response, next:NextFunction)=>{})
taskRoutes.put("/:id",(req:Request, res:Response, next:NextFunction)=>{})
taskRoutes.delete("/:id",(req:Request, res:Response, next:NextFunction)=>{})

export default taskRoutes;