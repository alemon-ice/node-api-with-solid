import { app } from './app'

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Start server on port ${process.env.SERVER_PORT}`)
)
