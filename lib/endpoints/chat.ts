/**
 * This is the Chat Class, it contains all the methods to handle the chat.
 * Those actions do not require any Query Role.
 * @class Chat
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/chat.html
 * @author AriusII
 */
export class Chat {
	private _url: string
	private _token: string
	private defaultColor: any
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
		this.defaultColor = { a: 255, r: 0, g: 0, b: 0 }
	}
	
	/**
	 * Sends a chat message to everyone currently logged into your game.
	 * @param {string} message - The message you want to send.
	 * @param {Array} - { a: number, r: number, g: number, b: number }, by default it's black.
	 * @param {string} [target] - The target of the message. (Optional)
	 * @returns - The response from the server.
	 */
	async globalMessage(message: string, color: { a: number, r: number, g: number, b: number }, target: string) {
		const res = await fetch(`${this._url}/api/v1/chat/global`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				message: message,
				color: color || this.defaultColor,
				target: target || ''
			})
		})
		return await res.json()
	}

	/**
	 * Sends a chat message to everyone in the proximity of a given map.
	 * @param {string} map - The Map ID you want to send the message to.
	 * @param {string} message - The message you want to send.
	 * @param {Array} - { a: number, r: number, g: number, b: number }, by default it's black.
	 * @param {string} [target] - The target of the message. (Optional)
	 * @returns - The response from the server.
	 */
	async proximityMessage(mapid: string, message: string, color: { a: number, r: number, g: number, b: number }, target: string) {
		const res = await fetch(`${this._url}/api/v1/chat/proximity/${mapid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				message: message,
				color: color || this.defaultColor,
				target: target || ''
			})
		})
		return await res.json()
	}

	/**
	 * Sends a chat message to a specific player.
	 * @param {string} player - The Account Name or Player Name you want to send the message to.
	 * @param {string} message - The message you want to send.
	 * @param {Array} - { a: number, r: number, g: number, b: number }, by default it's black.
	 * @param {string} [target] - The target of the message. (Optional)
	 * @returns - The response from the server.
	 */
	async directMessage(user: string, message: string, color: { a: number, r: number, g: number, b: number }, target: string) {
		const res = await fetch(`${this._url}/api/v1/chat/direct/${user}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				message: message,
				color: color || this.defaultColor,
				target: target || ''
			})
		})
		return await res.json()
	}
}