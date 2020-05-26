import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Appointments extends BaseSchema {
  protected tableName = 'appointments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned().notNullable().primary()
      table.date('date').notNullable()
      table.date('canceled_at').nullable()

      table
        .integer('user_id')
        .unsigned()
        .nullable()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table
        .integer('provider_id')
        .unsigned()
        .nullable()

      table
        .foreign('provider_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
