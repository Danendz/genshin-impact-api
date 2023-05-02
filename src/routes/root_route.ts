import router from '@config/router'

import { getRoot } from '@controllers/root_controller/get'

router.get('/', getRoot)

export default router
