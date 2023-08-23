import express from 'express'
import oauthMiddleware from '../../middlewares/oauthMiddleware.js'
import estafetaRequest from '../../utils/request.js'
const router = express.Router()

router.get('/', oauthMiddleware, async (req, res) => {
	const accessToken = req.token
	const session = res.locals.shopify.session

	const { creationStartDate, creationEndDate, filter = '', optionCode, totalRecords, page } = req.query

	let pickups = await estafetaRequest.getPickups({
		accessToken,
		creationStartDate,
		creationEndDate,
		filter,
		shop: session.shop,
		optionCode,
		totalRecords,
		page
	})

	res.json(pickups)
})

export default router
