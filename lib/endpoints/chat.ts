/**
 * This is the Chat Class, it contains all the methods to handle the chat.
 * Those actions do not require any Query Role.
 * @class Authentification
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/chat.html
 * @author AriusII
 */
export class Chat {
	constructor() {
	}
	
	/**
	 * It sends a global message to the server
	 * @param {string} url - The URL of the server you want to send the message to.
	 * @param {string} token - The token of the user you want to send the message as.
	 * @param {string} message - The message you want to send.
	 * @param [color] - { a: number, r: number, g: number, b: number }
	 * @param {string} [target] - The target of the message.
	 * @returns A promise.
	 */
	globalMessage(url: string, token: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
		return fetch(`${url}/api/v1/chat/global`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				message: message,
				color: color,
				target: target
			})
		})
	}

	/**
	 * It sends a message to all players within a certain radius of the selected map.
	 * @param {string} url - The URL of the server you're connecting to.
	 * @param {string} token - The token you got from the login function
	 * @param {string} mapid - The ID of the map you want to send the message to.
	 * @param {string} message - The message you want to send.
	 * @param [color] - { a: number, r: number, g: number, b: number }
	 * @param {string} [target] - The user to send the message to. If not specified, the message will be
	 * sent to all users in the map.
	 * @returns A promise.
	 */
	proximityMessage(url: string, token: string, mapid: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
		return fetch(`${url}/api/v1/chat/proximity/${mapid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				message: message,
				color: color,
				target: target
			})
		})
	}

	/**
	 * It sends a direct message to a user
	 * @param {string} url - The URL of the server you want to send the message to.
	 * @param {string} token - The token of the user you want to send the message as.
	 * @param {string} user - The user you want to send the message to.
	 * @param {string} message - The message you want to send.
	 * @param [color] - { a: number, r: number, g: number, b: number }
	 * @param {string} [target] - The user you want to send the message to.
	 * @returns A promise.
	 */
	directMessage(url: string, token: string, user: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
		return fetch(`${url}/api/v1/chat/direct/${user}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				message: message,
				color: color,
				target: target
			})
		})
	}
}