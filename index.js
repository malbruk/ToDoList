import express from 'express'
import data from './data.js'
import bodyParser from 'body-parser';
import TasksController from './Controllers/TasksController.js';

const app = express()
const port = 3001

console.log('data', data)

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

//endpoint - פונקציה שחשופה לקריאות מהקליינט
app.get('/', (req, res) => {
    res.send('מה נשמע? ברוך ה')
})

app.get('/tasks/', TasksController.getList);

app.get('/tasks/:id', TasksController.getById)

app.post('/tasks', (req, res) => {
    console.log('req.body',req.body);
    res.send('new task was added!')
})

app.put('/tasks/:id', (req, res) => {




    res.send('task was updatated!')
})

app.delete('/tasks/:id', (req, res) => {



    res.send('task was deleted!')
})

app.listen(port, () => {





    console.log(`my app listening on port http://localhost:${port}`)
})

/*
[ V ] post, put
[ V ] body parser
[ ] controller
[ V ] nodemon + script
*/

