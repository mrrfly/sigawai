import Route from '@ioc:Adonis/Core/Route'

Route.get('/login', async (ctx) => {
  const { default: AuthenticationController } = await import( 'App/Controllers/Http/Auth/AuthenticationController' )
  return new AuthenticationController().signin(ctx)
})
Route.post('/login',async (ctx) => {
  const { default: AuthenticationController } = await import( 'App/Controllers/Http/Auth/AuthenticationController' )
  return new AuthenticationController().signinProcess(ctx)
}).as('auth.login')

Route.get('/logout',async (ctx) => {
  const { default: AuthenticationController } = await import( 'App/Controllers/Http/Auth/AuthenticationController' )
  return new AuthenticationController().signOut(ctx)
})
