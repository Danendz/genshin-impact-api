import Koa from 'koa'
import koaBody from 'koa-body';
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import koaCompress from 'koa-compress';
import router from '@routes/index'

const app = new Koa();
const port = process.env.PORT || 5000;

app.use(koaBody())
app.use(helmet())
app.use(cors())
app.use(koaCompress())
app.use(router())

export default app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
