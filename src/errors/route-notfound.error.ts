import {AbstractError} from "./interfaces/abstract.error";

export class RouteNotfoundError extends AbstractError{
    constructor() {
        super();
    }

    statusCode: number = 404;
    name:string = RouteNotfoundError.name
    serializeErrors(): { name: string; message: string; field?: string }[] {
        return [{name: this.name, message:'route not found'}];
    }
}