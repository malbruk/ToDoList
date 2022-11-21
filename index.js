import express from 'express'
import data from './data.js'
import bodyParser from 'body-parser';
import tasksRouter from './Routers/TasksRouter.js';

const app = express()
const port = 3001

console.log('data', data)

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

function middleware(req, res, next){
    console.log('middleware');
    if(req.query.stop == 1){
        console.log('out', req.query);
        res.send('out');
        return;
    }
    //TODO
    //req.change
    next();
}

function auth(req, res, next){ 
    //TODO get cookie from req
    //check who is the user and if it is valid
    console.log('auth');
    let user = '203976113' //got from cookie
    req.user = user;
    next();
}


app.use('/', auth);
//endpoint - פונקציה שחשופה לקריאות מהקליינט
app.get('/', (req, res) => {
    res.send('מה נשמע? ברוך ה')
})

app.use('/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`my app is running`)
})

/*
[ V ] post, put
[ V ] body parser
[ ] controller
[ V ] nodemon + script
*/

