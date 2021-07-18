import {MigrationInterface, QueryRunner} from "typeorm";

export class User1626600613796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      INSERT INTO users (username, email, password)
      VALUES ('admin', 'admin@example.com', 'afb65dd5a15167fc7359:328f7bbab4ea7e26101a7804ef91a809d993eebe20ccbec6fbfb6f5db2b214f0639859c43b22c979e0c50fe0c9f0712e3b670b2180ded9484db53ee7492d80ca')
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin
      '
      `)
    }

}
