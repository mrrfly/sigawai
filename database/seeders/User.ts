import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        level: 'DEWA',
        name: 'DEWA',
        username: 'dewa',
        password: 'password'
      },
      {
        level: 'ADMIN',
        name: 'admin',
        username: 'admin',
        password: 'password'
      },
      {
        level: 'PEG',
        name: 'Muhammad Rafly Ramadhan',
        username: 'mrrfly',
        password: 'mrrganteng'
      }
    ])
  }
}
