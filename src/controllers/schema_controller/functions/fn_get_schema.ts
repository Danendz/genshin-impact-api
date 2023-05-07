import { assetsSchema } from '@config/paths';
import type { SchemaType } from '../types/schema';
import { getEntitiesList, getEntityByPath } from '@src/shared/functions/fn_entities';

async function fn_get_schema(): Promise<string[]>
async function fn_get_schema(type: string): Promise<SchemaType>
async function fn_get_schema(type?: string): Promise<string[] | SchemaType> {
  if (!type) {
    return await getEntitiesList(assetsSchema());
  }
  return await getEntityByPath(assetsSchema(), type, 'schema');
}

export default fn_get_schema;
