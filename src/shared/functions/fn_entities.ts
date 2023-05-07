import type { EntityType } from '../types/entity_type';
import path from 'path';
import { getFileByPath, getFilesByPathIfExists, getDirList } from './fn_file_system';
import fn_error_response from './fn_error_response';

const getEntitiesList = async (dir: string) => await getDirList(dir);

const getEntityByPath = async (dir: string, type: string, name: string): Promise<EntityType> => {
  try {
    return await getFileByPath(path.join(dir, type), `${name}.json`);
  } catch (err) {
    const availableEntities = (await getEntitiesList(dir)).join(', ');
    throw fn_error_response(err.message, `No such entity. Available entities: [${availableEntities}]`);
  }
};

const getAllEntitiesByFolder = async (dir: string, name: string): Promise<EntityType[]> => {
  const filename = `${name}.json`;
  const dirList = (await getDirList(dir)).map((foundDir: string) => path.join(dir, foundDir));
  return await getFilesByPathIfExists(dirList, filename);
};

export {
  getEntitiesList,
  getEntityByPath,
  getAllEntitiesByFolder
};
