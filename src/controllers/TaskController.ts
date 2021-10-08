import { Request, Response} from 'express';
import tb_task from '../models/Tasks';
import { getRepository } from 'typeorm';

export default {
    async create( req: Request, res: Response){
        const { name, user_id, description, initial_date, finish_date, status} = req.body;
        const taskRepository = getRepository(tb_task);
        const calc_date = (finish_date - initial_date)

        const cad_task = taskRepository.create({
            name, 
            user_id,
            description, 
            initial_date, 
            finish_date, 
            status,
            calc_date,
            
        })

        await taskRepository.save(cad_task);
        return res.render('tasks');
        //return res.status(201).json(cad_task);
    },

    async list(req: Request, res: Response){
        const taskRepository = getRepository(tb_task);
        const list_task = await taskRepository.find();
       // return res.status(201).json(list_task);
       res.render('tasks/task_list', {list_task: list_task})
    },

    async listByUser(req: Request, res: Response){
        const id = req.params        
        const taskRepository = getRepository(tb_task);
        const list_By_User = await taskRepository.find({
            where: {user_id: id}
        })
        //return res.status(201).json(list_By_User)
    },

    async new(req: Request, res: Response){
        res.render('tasks/insert_task');
    }

  
}