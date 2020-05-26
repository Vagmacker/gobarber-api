import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProvidersController {
  public async index ({ response }: HttpContextContract) {
    const providers: User[] | null = await User.query().where('provider', true).preload('avatar').select('*')
    return response.json(providers)
  }
}
