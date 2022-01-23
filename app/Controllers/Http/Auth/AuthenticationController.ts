import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthenticationController {

  public signin ({ view }: HttpContextContract) {
    return view.render('auth.signin')
  }

  public async signinProcess ({request, auth, session, response}: HttpContextContract) {
    const {username, password} = request.all()

    try {
      await auth.attempt(username, password)

      return response.redirect('/dashboard')

    } catch(error) {

      session.flash('notification', "we couldnt verifi")
      return response.redirect('back')

    }
  }

  public async signOut ({auth, response}: HttpContextContract) {
    await auth.logout()

    return response.redirect('/')
  }
}
