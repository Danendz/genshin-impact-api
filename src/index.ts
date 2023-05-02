import Koa from 'koa'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import koaCompress from 'koa-compress'
import dotenv from 'dotenv-flow'
import router from './routes/index'
dotenv.config()

const port = process.env.PORT || 3000
const app = new Koa()

app.use(koaBody())
app.use(helmet())
app.use(cors())
app.use(koaCompress())
app.use(router())

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
}

export default app
