export abstract class AbstractRepository<T>{
    abstract find():T[]
    abstract findByID(id:any):T | undefined
    abstract create(createDTO:T):T;
    abstract deleteByID(id:string):T | undefined
    abstract updateByID(updateDTO:T):T
}