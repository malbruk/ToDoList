const TasksController = {
    getList: (req, res)=>{
        console.log(req.query);
        res.send(JSON.stringify(data))
    },

    getById: (req, res) => {
            //console.log('get task by id req', req.params.id);
        res.send('get task by id ' +  req.params.id)
    },

    add:(req,res)=>{
        
    }
}

export default TasksController;