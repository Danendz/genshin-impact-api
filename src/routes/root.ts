import router from 'config/router'

import { getRoot } from 'controllers/root'

router.get('/', getRoot)

export default router
