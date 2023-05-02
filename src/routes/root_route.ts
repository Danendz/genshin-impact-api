import router from '@config/router'

import { getRoot } from '@controllers/root_controller/get'

router.get('/api', getRoot)

export default router
