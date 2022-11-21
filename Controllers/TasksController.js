import data from '../data.js'
const TasksController = {
    getList: (req, res)=>{
        console.log('getList');
        res.send(JSON.stringify(data))
    },

    getById: (req, res) => {
        console.log('getById');
        console.log('req.user',req.user)
            //console.log('get task by id req', req.params.id);
        res.send('get task by id ' +  req.params.id)
    },

    add:(req,res)=>{
        
    },

    update:(req,res)=>{
        
    }
}

export default TasksController;
