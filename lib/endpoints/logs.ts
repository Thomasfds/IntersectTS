/**
 * This is the Logs Class, it contains all the methods to handle the logs.
 * Those actions do not require any Query Role.
 * @class Logs
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/logs.html
 * @author AriusII
 */
export class Logs {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * Retrieve player activity
	 * @param player - The player ID you want to retrieve the activity for.
	 * @returns - The response from the server.
	 */
	async playerActivity(player: string) {
		const res = await fetch(`${this._url}/api/v1/logs/player/${player}/activity`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * Retrieve user activity
	 * @param user - The user ID you want to retrieve the activity for.
	 * @returns - The response from the server.
	 */
	async userActivity(user: string) {
		const res = await fetch(`${this._url}/api/v1/logs/user/${user}/activity`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * Retrieve user activity by ip
	 * @param user - The user ID you want to retrieve the activity for.
	 * @returns - The response from the server.
	 */
	async userActivityByIP(user: string) {
		const res = await fetch(`${this._url}/api/v1/logs/user/${user}/ip`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}