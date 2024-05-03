import { app } from './app'
import { env } from './env'

app
  .listen({ port: Number(process.env.PORT) || 10001 })
  .then(() => console.log(`HTTP Server Running! in ${env.PORT}`))
