import type { EntityType } from '../types/entity_type';
import path from 'path';
import { getFileByPath, getFilesByPathIfExists, getDirList } from './fn_file_system';

const getEntitiesList = async (dir: string) => await getDirList(dir);

const getEntityByPath = async (dir: string, type: string, name: string): Promise<EntityType> => (
  await getFileByPath(path.join(dir, type), `${name}.json`)
);

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
