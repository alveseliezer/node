import {MigrationInterface, QueryRunner} from "typeorm";

export class addNewCol1633483886932 implements MigrationInterface {
    name = 'addNewCol1633483886932'

    public async up(queryRunner: QueryRunner): Promise<void> {
   
        await queryRunner.query(`ALTER TABLE "tb_tasks" ADD COLUMN "calc_date" INTEGER`);
      
       }

    public async down(queryRunner: QueryRunner): Promise<void> {
      
    }

}
