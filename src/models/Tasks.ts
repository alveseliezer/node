import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Tb_users from './Users';

@Entity('tb_tasks')
export default class tb_tasks{

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    user_id: number;
    @Column()
    description: string;
    @Column()
    cretated_at: string;
    @Column()
    initial_date: string;
    @Column()
    finish_date: string;
    @Column()
    status: string;
    @Column()
    calc_date: number;

    @ManyToOne(()=> Tb_users, tb_users => tb_users.id, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'user_id'})
    tb_users: Tb_users;

}
//export {tb_tasks};