export abstract class AbstractRepository<T>{
    abstract find():T[]
    abstract findByID(id:any):T
    abstract create(createDTO:T):T;
    abstract deleteByID(id:string):T
    abstract updateByID(updateDTO:T):T
}