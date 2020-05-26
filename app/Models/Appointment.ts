import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Appointment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date: Date

  @column()
  public canceledAt: Date

  @belongsTo(() => User, {
    foreignKey: 'id'
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'id'
  })
  public provider: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
