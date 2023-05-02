import router from '@config/router'

import { getSchemas, getSchemaByName } from '@controllers/schema_controller/get'

router.get('api/schema', getSchemas)
router.get('api/schema/:name', getSchemaByName)

export default router
