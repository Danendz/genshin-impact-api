import path from 'path'
import { assetsSchema } from '@config/paths'
import { getDirList, getFileByPath } from '@shared/functions/fn_file_system'
import type { SchemaType } from '../types/schema'

async function fn_get_schema(): Promise<string[]>
async function fn_get_schema(name: string): Promise<SchemaType>
async function fn_get_schema(name?: string): Promise<string[] | SchemaType> {
  if (!name) {
    return await getDirList(assetsSchema())
  }
  const schemaPath = path.join(assetsSchema(), name)
  return await getFileByPath(schemaPath, 'schema.json')
}

export default fn_get_schema
