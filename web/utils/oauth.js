import axios from 'axios'
import qs from 'querystring'

const oAuth = {
	getToken: async function () {
		const tokenUrl =
			process.env.ESTAFETA_TOKEN_URL || 'https://apiqa.estafeta.com:8443/auth/oauth/v2/token'
		const clientId = process.env.ESTAFETA_CLIENT_ID || 'l7da86aba924ac49d0a013fb7d85983408'
		const clientSecret = process.env.ESTAFETA_APP_SECRET || '2635d5ba31ac43bb9d8d63cd7e2badf6'
		const scope = process.env.ESTAFETA_SCOPE || 'execute'

		const auth = {
			username: clientId,
			password: clientSecret
		}

		const data = qs.stringify({
			grant_type: 'client_credentials',
			scope: scope
		})

		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			auth: auth
		}

		try {
			const response = await axios.post(tokenUrl, data, config)
			return response
		} catch (error) {
			console.error('Error getting access token', error)
		}
	}
}

export default oAuth
