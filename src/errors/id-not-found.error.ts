import {AbstractError} from "./interfaces/abstract.error";

export class IdNotFoundError extends AbstractError{
    constructor(id:string) {
        super();
        this.id = id;
        Object.setPrototypeOf(this,IdNotFoundError.prototype)
    }

    id:string;
    statusCode: number =402;
    name:string =  IdNotFoundError.name;
    serializeErrors(): { name: string; message: string; field?: string }[] {
        return [{name: this.name,message:`id ${this.id} not found`}];
    }


}