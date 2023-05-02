import fs from 'fs/promises'
import path from 'path'
import fn_error_response from './fn_error_response'
import type { SchemaType } from '@controllers/schema_controller/types/schema'

const getDirList = async (customPath: string): Promise<string[]> => {
  try {
    const dirs = await fs.readdir(customPath)
    return dirs
  } catch (e) {
    throw fn_error_response(e.message, 'No such directory')
  }
}

const getFileByPath = async (filePath: string, fileName: string): Promise<SchemaType> => {
  try {
    const buffer = await fs.readFile(path.join(filePath, fileName))
    return await JSON.parse(buffer.toString())
  } catch (e) {
    throw fn_error_response(e.message, 'No such file or directory')
  }
}

export {
  getDirList,
  getFileByPath
}
