import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tbTasks1633459705393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_tasks',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',                    
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'cretated_at',
                    type: 'varchar',
                    default: 'now()',
                },
                {
                    name: 'initial_date',
                    type: 'varchar',
                },
                {
                    name: 'finish_date',
                    type: 'varchar'
                },
                {
                    name: 'status',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'integer'
                }


            ]
        }))
    }
   // id, name, description, created_at, initial_date, finish_date, status
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_tasks');
    }

}
