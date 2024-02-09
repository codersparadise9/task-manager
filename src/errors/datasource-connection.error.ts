
import {AbstractError} from "./interfaces/abstract.error";

export class DatasourceConnectionError extends AbstractError{
    private reason:string = process.env.DATASOURCE_TYPE === 'file'? 'error reading from file' : 'error connecting DB'
    constructor(private errors: any[]) {
        super();
        Object.setPrototypeOf(this,DatasourceConnectionError.prototype)
    }
    name: string = DatasourceConnectionError.name;
    statusCode: number = 500;

    serializeErrors(): { name:string,message: string; field?: string }[] {
        return [{name:this.name,message:this.reason}];
    }
}