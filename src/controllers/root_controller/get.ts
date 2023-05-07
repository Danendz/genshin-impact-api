import type { Context } from 'koa';
import fn_get_assets from './functions/fn_get_assets';
import { fn_api_error_message, fn_api_success_message } from '@shared/functions/fn_api_response';

export const getRoot = async (ctx: Context) => {
  try {
    const rootDirs = await fn_get_assets();
    ctx.body = fn_api_success_message(rootDirs);
    ctx.status = 200;
  } catch (e) {
    ctx.body = fn_api_error_message(e.message);
    ctx.status = 400;
  }
};
