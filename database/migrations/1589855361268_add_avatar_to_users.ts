import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table
        .integer('avatar_id')
        .unsigned()
        .nullable()

      table
        .foreign('avatar_id')
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('avatar_id')
    })
  }
}
