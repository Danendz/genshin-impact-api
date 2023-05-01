import router from 'config/router'

import { getSchemas, getSchemaByName } from 'controllers/schema_controller/get'

router.get('/schema', getSchemas)
router.get('/schema/:name', getSchemaByName)

export default router
