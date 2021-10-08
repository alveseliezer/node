import { Request, Response } from 'express';
import tb_users from '../models/Users';
import tb_tasks from '../models/Tasks';
import { getRepository } from 'typeorm';

export default {
    async create( req: Request, res: Response){
        const {id, name, password, kind, created_at} = req.body
        const userRepository = getRepository(tb_users);
    
        const cad_user = userRepository.create({
            id, name, password, kind, created_at
        })
    
        await userRepository.save(cad_user);
    
        //return res.status(201).json(cad_user);
        res.render('users')
                
        },

        async list(req: Request, res: Response){
            const userRepository = getRepository(tb_users);
            const user = await userRepository.find();
            
            //return res.status(201).json(user);
            res.render('users/user_list', {user: user})
        },

        async index(req: Request, res: Response){
            res.render('index')
        },

        async new(req: Request, res: Response){
            res.render('users/insert_user');
        },

        async tasks_by_user(req: Request, res: Response){
            const id = req.params;
            const tasksRepository = getRepository(tb_tasks);
            const tasksByUser = await tasksRepository.find({
                where: {user_id: id}
            });
            res.render('users/tasks_by_user', {tasksByUser: tasksByUser});
        }

    }

