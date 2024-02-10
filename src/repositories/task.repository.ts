import {AbstractRepository} from "./interfaces/task.repository.interface";
import {Task} from "../models/interfaces/task.interface";
import {Datasource} from "../config/database/datasource";
import {IdNotFoundError} from "../errors/id-not-found.error";


export class TaskRepository implements AbstractRepository<Task>{

    private _repository : Task[]
    private datasource:Datasource;
    constructor() {
        this.datasource = new Datasource('../../task.json')
        this._repository = this.datasource.readData();
    }

    create(createDTO: Task): Task {
        if(this._repository.filter((task)=>task.id === createDTO.id)){
            throw new Error(`id ${createDTO.id} already exists`)
        }
         this._repository.push(createDTO);
         return this._repository.filter((task)=>task.id === createDTO.id)[0]
    }

    deleteByID(id: string): Task {
        if(!this._repository.filter((task)=>task.id === id)){
            throw new IdNotFoundError(id)
        }
        this._repository = this._repository.filter((repo) => repo.id !== id);
        return this._repository.filter((repo)=>repo.id === id)[0];
    }

    find(): Task[] {
        return this._repository;
    }

    findByID(id: any): Task | undefined {
        let res;
        this._repository.forEach((task)=>{
            if(task.id == id){
                res = task
            }
        })
        if(res)
            return res;
        else throw new IdNotFoundError(id)
    }

    updateByID(updateDTO: Partial<Task>): Task {

        const existingTask = this._repository.filter((task)=>task.id === updateDTO.id)[0]
        if(existingTask) {
            const updateTask =  this._repository.map((task)=>{
                if(task.id === existingTask.id){
                    return {
                        ...updateDTO
                    }
                }
            })
            return {
                id: updateTask[0]?.id || "0",
                description:updateTask[0]?.description || "",
                title:updateTask[0]?.title || "",
                completed:updateTask[0]?.completed || false
          }
        }
        else{
            throw new IdNotFoundError(updateDTO?.id || "0")
        }
    }

}