import { IocContract } from '@adonisjs/fold'

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register () {
    // Register your own bindings
  }

  public boot () {
    // IoC container is ready
  }

  public shutdown () {
    // Cleanup, since app is going down
  }

  public async ready () {
    const Event = (await import('@ioc:Adonis/Core/Event')).default
    const Database = (await import('@ioc:Adonis/Lucid/Database')).default

    Event.on('db:query', Database.prettyPrint)
  }
}
