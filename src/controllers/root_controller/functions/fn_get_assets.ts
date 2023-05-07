import { assets } from '@config/paths';
import { getEntitiesList } from '@src/shared/functions/fn_entities';

export default async () => await getEntitiesList(assets());
