import File from 'App/Models/File'
import Application from '@ioc:Adonis/Core/Application'
import FileValidator from 'App/Validators/FileValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'

export default class FilesController {
  public async store ({ request, response }: HttpContextContract) {
    const data = await request.validate(FileValidator)
    const { clientName: name } = <MultipartFileContract>request.file('avatar')
    const path: string = `${new Date().getTime()}.${data.avatar.extname}`

    await data.avatar.move(Application.tmpPath('uploads'), {
      name: path
    })

    return response.status(201).json(await File.create({
      name,
      path
    }))
  }
}
