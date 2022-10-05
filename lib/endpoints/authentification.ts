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
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}

	/**
	 * @documentation https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/authentication.html#get-token
	 * @param username The username of the API user
	 * @param password The password of the API user
	 * @returns The token
	*/
	public getToken(username: string, password: string) {
		return fetch(`${this._url}/api/oauth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				grant_type: 'password',
				username: username,
				password: password
			})
		})
	}

	/**
	 * It takes a url and a token, and returns a fetch request to the url with the token in the body.
	 * @returns A promise.
	 */
	public refreshToken() {
		return fetch(`${this._url}/api/oauth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				grant_type: 'refresh_token',
				refresh_token: this._token
			})
		})
	}

	/**
	 * It takes a url, a token, and a user, and returns a fetch request that deletes the token from the
	 * database.
	 * @param {string} user - The user's username
	 * @returns A promise.
	 */
	public deleteToken(user: string) {
		return fetch(`${this._url}/api/oauth/token/${user}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It takes a url, a token, and a user, and then it deletes the token from the database.
	 * @param {string} user - the user's username
	 * @returns The response from the server.
	 */
	public deleteTokenById(user: string) {
		return fetch(`${this._url}/api/oauth/token/${user}/${this._token}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
}