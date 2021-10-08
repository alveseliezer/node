import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinTable } from "typeorm";
import Tb_tasks from "./Tasks";

@Entity('tb_users')
export default class tb_users{

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    kind: string;
    @CreateDateColumn()
    created_at: Date;

    @OneToMany(()=> Tb_tasks, tb_tasks => tb_tasks.tb_users)
    @JoinTable({ name: 'user_id'})
    tb_tasks: Tb_tasks[];


}

//export {tb_users};