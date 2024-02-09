import express, { Express} from "express";
import {errorHandler} from "./middlewares/error.handler.middleware";
import {RouteNotfoundError} from "./errors/route-notfound.error";
import taskRoutes from "./routers/task.router";
import path from "path";

const app:Express  = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("path = ",path.join('..','task.json'))
app.use('/task',taskRoutes)
app.get('*',()=> {throw new RouteNotfoundError()});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
}).on("error",(err)=> console.log('Something bad happened', err));



module.exports = app;