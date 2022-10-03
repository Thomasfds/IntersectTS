import * as Endpoints from './endpoints/allendpoints'
/**
* API documentation: https://docs.freemmorpgmaker.com/en-US/api/v1/
*/
export class Main {
	_url: string
	_username: string
	_password: string
	_token: Promise<unknown>
	constructor(url: string, username: string, password: string) {
		this._url = url
		this._username = username
		this._password = password
		this._token = this.initToken()
		
		// we want to setInterval to refresh the token every 5 minutes, we use the Auth.refreshToken method
		setInterval(() => {
			return this._token = Endpoints.Auth.refreshToken(this._url, this._token)
		}, 300000)

	}
	
	async initToken() {
		return Endpoints.Auth.getToken(this._url, this._username, this._password).then(async (reponse) => {
			const json = await reponse.json()
			return json.access_token
		})
	}
}