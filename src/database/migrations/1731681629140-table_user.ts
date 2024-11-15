import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1731681629140 implements MigrationInterface {
    name = 'TableUser1731681629140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
