import type { Context } from 'koa'
export default async (ctx: Context) => {
  ctx.body = { message: 'Hello World' }
}
