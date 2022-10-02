import * as Endpoints from './endpoints/endpoints'

export class Main {
	_url: string
	_username: string
	_password: string
	_token: Promise<unknown>
	constructor(url: string, username: string, password: string) {
		// API documentation: https://docs.freemmorpgmaker.com/en-US/api/v1/
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

	async buildParam(options = {} as any) {
		const params = new URLSearchParams()
		for (const key in options) {
			params.append(key, options[key])
		}
		return params.toString()
	}

	async buildParamSplited(options = {} as any) {
		const params = new URLSearchParams()
		for (const key in options) {
			
			params.append(key, options[key])
		}
		const paramsArray = params.toString().split('&')
		const paramsArray1 = paramsArray.slice(0, paramsArray.length / 2)
		const paramsArray2 = paramsArray.slice(paramsArray.length / 2, paramsArray.length)
		const params1 = paramsArray1.toString().replace(/(\[|\]|number|=)/g, '')
		const params2 = paramsArray2.toString().replace(/(\[|\]|number|=)/g, '')
		return [params1.replace(/(\d)/g, ''), params2.replace(/(\d)/g, '')]
	}



	async getPlayersList(options = {}) {
		console.log(`${this._url}/api/v1/players?${await this.buildParam(options)}`)
		const reponse = await fetch(`${this._url}/api/v1/players?${await this.buildParam(options)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		const data = await reponse.json()
		return data
	}

	async getCharacterFromAccount(options = {}) {
		const [params1, params2] = await this.buildParamSplited(options)
		console.log(`${this._url}/api/v1/users/${params1}/players/${params2}`)
		// /api/v1/users/[lookupKey1]/players/[lookupKey2]
		const reponse = await fetch(`${this._url}/api/v1/users/${params1}/players/${params2}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		const data = await reponse.json()
		return data
	}
}