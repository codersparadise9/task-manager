import {Task} from "../../models/interfaces/task.interface";
import * as fs from "fs";
import {DatasourceConnectionError} from "../../errors/datasource-connection.error";
import path from "path";

export class Datasource {
    private readonly _filePath: string;

    constructor(filePath:string) {
        const pathName = path.join(__dirname, '..', 'config', 'dev', 'foobar.json');
        this._filePath = filePath;
    }
     readData():Task[]{
        try {
            const jsonData = fs.readFileSync('task.json','utf-8');
            return JSON.parse(jsonData) as Task[];
        }catch (error:any){
            throw new DatasourceConnectionError([{message:error.message}])
        }
    }

     insertData(inputData:Task):Task{
        try {
            const stringifyData = JSON.stringify(inputData)
            fs.writeFileSync(this._filePath, stringifyData)
            return inputData;
        }catch (error:any){
            throw new DatasourceConnectionError([{message:error.message}])
        }
    }
}