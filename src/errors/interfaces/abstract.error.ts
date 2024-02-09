export abstract class AbstractError extends Error{
    abstract statusCode:number;

    constructor() {
        super();

        Object.setPrototypeOf(this,AbstractError.prototype);

    }

    abstract serializeErrors():{ name:string, message:string,field?:string }[]
}