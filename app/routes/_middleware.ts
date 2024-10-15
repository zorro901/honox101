// /app/routes/_middleware.ts
import { createRoute } from 'honox/factory'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { basicAuth } from 'hono/basic-auth';

export default createRoute(logger(), secureHeaders())
// export default createRoute(
//     basicAuth({
//     username: 'hono',
//     password: 'acoolproject'
//   })
// )