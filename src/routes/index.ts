import combineRouters from 'koa-combine-routers'
import rootRouter from './root_route'
import schemaRouter from './schema_route'

const router = combineRouters(
  rootRouter,
  schemaRouter
)

export default router
