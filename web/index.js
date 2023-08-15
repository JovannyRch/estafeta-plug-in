// @ts-nocheck
import express from 'express'
import { readFileSync } from 'fs'
import { join } from 'path'
import serveStatic from 'serve-static'

import GDPRWebhookHandlers from './gdpr.js'
import ordersRoutes from './routes/orders/index.js'
import pickupsRoutes from './routes/pickups/index.js'
import shipmentsRoutes from './routes/shipments/index.js'
import shopify from './shopify.js'

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT || '3000', 10)

const STATIC_PATH =
	process.env.NODE_ENV === 'production' ? `${process.cwd()}/frontend/dist` : `${process.cwd()}/frontend/`

const app = express()

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin())
app.get(shopify.config.auth.callbackPath, shopify.auth.callback(), shopify.redirectToShopifyOrAppRoot())
app.post(shopify.config.webhooks.path, shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers }))

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use('/api/*', shopify.validateAuthenticatedSession())

app.use(express.json())

app.use('/api/orders', ordersRoutes)
app.use('/api/pickups', pickupsRoutes)
app.use('/api/shipments', shipmentsRoutes)

app.use('/api/shop', async (req, res) => {
	const session = res.locals.shopify.session
	const shop = await shopify.api.rest.Shop.all({
		session,
		fields: 'id,name,email'
	})
	res.json(shop)
})

app.use('/api/shopify/orders', async (req, res) => {
	const session = res.locals.shopify.session
	const orders = await shopify.api.rest.Order.all({
		session: session,
		fields: 'id,order_number,name,created_at'
	})

	res.json(orders?.data ?? [])
})

app.use(shopify.cspHeaders())
app.use(serveStatic(STATIC_PATH, { index: false }))

app.use('/*', shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
	return res
		.status(200)
		.set('Content-Type', 'text/html')
		.send(readFileSync(join(STATIC_PATH, 'index.html')))
})

app.listen(PORT)
