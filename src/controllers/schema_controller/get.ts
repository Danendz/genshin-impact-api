import type { Context } from 'koa'
import fn_get_schema from './functions/fn_get_schema'
import { fn_api_error_message, fn_api_success_message } from 'shared/functions/fn_api_response'

const getSchemas = async (ctx: Context) => {
  try {
    const schemas = await fn_get_schema()
    ctx.body = fn_api_success_message(schemas)
    ctx.status = 200
  } catch (e) {
    ctx.body = fn_api_error_message(e.message)
    ctx.status = 400
  }
}

const getSchemaByName = async (ctx: Context) => {
  const { name } = ctx.params
  try {
    const schema = await fn_get_schema(name)
    ctx.body = fn_api_success_message(schema)
    ctx.status = 200
  } catch (e) {
    ctx.body = fn_api_error_message(e.message)
    ctx.status = 400
  }
}

export {
  getSchemas,
  getSchemaByName
}
