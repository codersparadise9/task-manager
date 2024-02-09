import {AbstractError} from "./interfaces/abstract.error";

export class RequestValidationError extends AbstractError{
    constructor(private errors: any[]) {
        super();
        Object.setPrototypeOf(this,RequestValidationError.prototype)
    }

    name: string = RequestValidationError.name;
    statusCode: number = 400;

    serializeErrors(): {name:string, message: string; field?: string }[] {
        return this.errors.map((error)=>{return(
            {
                name:this.name,
                message:error.msg,
                field:error.param
            }
        )})
    }


}