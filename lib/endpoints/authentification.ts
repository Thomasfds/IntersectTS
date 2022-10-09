/**
 * This is the Authentification Class, it contains all the methods to handle the authentification and token.
 * Those actions do not require any Query Role.
 * @class Authentification
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/authentication.html
 * @author AriusII
 */
export class Authentification {
	private _url: string
	private _token: string
	private _refreshToken: string
	constructor(url: string, token: string, refreshToken: string) {
		this._url = url
		this._token = token
		this._refreshToken = refreshToken
	}

	/**
	 * It takes a url and a token, and returns a fetch request to the url with the token in the body.
	 * @returns A promise.
	 */
	async refreshToken() {
		const res = await fetch(`${this._url}/api/oauth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				grant_type: 'refresh_token',
				refresh_token: this._refreshToken
			})
		})
		return await res.json()
	}

	/**
	 * It takes a url, a token, and a user, and returns a fetch request that deletes the token from the
	 * database.
	 * @param {string} user - The user's username
	 * @returns A promise.
	 */
	async deleteToken(user: string) {
		const res = await fetch(`${this._url}/api/oauth/token/${user}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It takes a url, a token, and a user, and then it deletes the token from the database.
	 * @param {string} user - the user's username
	 * @returns The response from the server.
	 */
	async deleteTokenById(user: string) {
		const res = await fetch(`${this._url}/api/oauth/token/${user}/${this._token}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}