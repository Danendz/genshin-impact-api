import { assets } from '@config/paths'
import { getDirList } from '@shared/functions/fn_file_system'

export default async () => await getDirList(assets())
