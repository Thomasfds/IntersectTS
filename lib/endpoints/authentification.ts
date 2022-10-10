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
	 * /!\ CAUTION /!\ This method can delete your CURRENT TOKEN KEY, so be careful, or you will not be able to use the API anymore.
	 * It takes a url and a token, and returns a fetch request to the url with the token in the body.
	 * @returns The response from the server.
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
	 * It deletes a token from a specific user.
	 * @param {string} user - The user you want to delete the token for.
	 * @returns The response from the server.
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
	 * It deletes the token information from the specified token id, from a specific user.
	 * @param {string} user - The user you want to delete the token for.
	 * @returns The response from the server.
	 */
	async deleteTokenById(user: string) {
		const res = await fetch(`${this._url}/api/oauth/token/${user}/${this._refreshToken}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}