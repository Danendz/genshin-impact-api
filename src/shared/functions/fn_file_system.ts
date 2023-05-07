import fs from 'fs/promises';
import path from 'path';
import fn_error_response from './fn_error_response';
import type { EntityType } from '../types/entity_type';

const getDirList = async (customPath: string): Promise<string[]> => {
  try {
    return await fs.readdir(customPath);
  } catch (e) {
    throw fn_error_response(e.message, 'No such directory');
  }
};

const getFileByPath = async (filepath: string, filename: string): Promise<EntityType> => {
  try {
    const buffer = await fs.readFile(path.join(filepath, filename));
    return await JSON.parse(buffer.toString());
  } catch (e) {
    throw fn_error_response(e.message, 'No such file');
  }
};

const getFilesByPathIfExists = async (dirs: string[], filename: string): Promise<EntityType[]> => {
  const files: Promise<EntityType>[] = [];
  for (const dir of dirs) {
    files.push(getFileByPath(dir, filename));
  }
  const obtainedFiles: EntityType[] = (await Promise.allSettled(files)).map((file) => {
    if (file.status === 'fulfilled') {
      return file.value;
    }
    return {};
  });

  return obtainedFiles;
};


export {
  getDirList,
  getFileByPath,
  getFilesByPathIfExists
};
