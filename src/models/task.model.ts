import {Task} from "./interfaces/task.interface";

export class TaskModel implements Task{
    constructor(id:string,description:string,title:string,completed:boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed
    }
    get completed(): boolean {
        return this.completed;
    }

    set completed(value: boolean) {
        this.completed = value;
    }

    get description(): string {
        return this.description;
    }

    set description(value: string) {
        this.description = value;
    }

    get id(): string {
        return this.id;
    }

    set id(value: string) {
        this.id = value;
    }

    get title(): string {
        return this.title;
    }

    set title(value: string) {
        this.title = value;
    }


}