import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MLevels extends BaseSchema {
  protected tableName = 'm_level'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',)
      table.string('kode', 50).notNullable().unique()
      table.string('level', 255).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
