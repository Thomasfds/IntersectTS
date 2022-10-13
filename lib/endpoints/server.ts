/**
 * This is the Server Class, it contains all the methods to handle the Server.
 * Those actions do not require any Query Role.
 * @class Server
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/info.html
 * @author AriusII
 */
export class Server {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * Checks token and returns whether or not you're authorized to access protected api endpoints.
	 * @returns - The response from the server.
	 */
	async getAuthorized() {
		const res = await fetch(`${this._url}/api/v1/info/authorized`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * Retrieves the game name and port number from your server.
	 * @returns - The response from the server.
	 */
	async getInfo() {
		const res = await fetch(`${this._url}/api/v1/info`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * Retrieves active server stats such as online player count, uptime, cps, etc.
	 * @returns - The response from the server.
	 */
	async getStats() {
		const res = await fetch(`${this._url}/api/v1/info/stats`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * Retrieves the active server configuration.
	 * @returns - The response from the server.
	 */
	async getConfig() {
		const res = await fetch(`${this._url}/api/v1/info/config`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}