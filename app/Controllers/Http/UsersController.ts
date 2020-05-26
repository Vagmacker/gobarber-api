import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index ({ response }: HttpContextContract) {
    const users: User[] | null = await User.all()
    return response.json(users)
  }

  public async store ({ request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    return response.status(201).json(await User.create(data))
  }

  public async show ({ params, response }: HttpContextContract) {
    const user: User | null = await User.find(params.id)

    if (user === null) {
      response.status(404).json({
        error: 'Record not found.'
      })
    }

    return response.json(user)
  }

  public async update () {
  }

  public async destroy () {
  }
}
