/**
 * This is the Admin Class, it contains all the admin actions from the API.
 * Some of these actions require the Users.Query role.
 * @class Admin
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/admin.html
 * @author AriusII
 */
export class Admin {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * It bans a player from the server
	 * @param {string} player - The player's name
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban
	 * @param {string} moderator - The name of the moderator who banned the player.
	 * @param {boolean} ip - boolean - Whether or not to ban the player's IP address.
	 * @returns A promise.
	 */
	banPlayer(player: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip
			})
		})
	}

	/**
	 * It bans a user from the server
	 * @param {string} user - The user's ID
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban
	 * @param {string} moderator - The moderator who banned the user.
	 * @param {boolean} ip - boolean - Whether or not to ban the user's IP address.
	 * @returns A promise.
	 */
	banUser(user: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip
			})
		})
	}

	/**
	 * It unban's a user
	 * @param {string} user - The user's ID
	 * @returns The response from the server.
	 */
	unbanUser(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It unban's a player
	 * @param {string} player - The player's username
	 * @returns A promise.
	 */
	unbanPlayer(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It kicks a user from the server
	 * @param {string} user - The user's ID
	 * @returns A promise.
	 */
	kickUser(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It kicks a player from the server
	 * @param {string} player - The player's username
	 * @returns A promise.
	 */
	kickPlayer(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It mutes a user
	 * @param {string} user - The user's ID
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute
	 * @param {string} moderator - The moderator who is muting the user.
	 * @param {boolean} ip - boolean - Whether or not to mute the user's IP address.
	 * @returns The response from the server.
	 */
	muteUser(user: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip
			})
		})
	}

	/**
	 * It mutes a player
	 * @param {string} player - The player's name
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute
	 * @param {string} moderator - The name of the moderator who is muting the player.
	 * @param {boolean} ip - boolean - Whether or not to mute the player's IP address.
	 * @returns A promise.
	 */
	mutePlayer(player: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip
			})
		})
	}

	/**
	 * It unmutes a user
	 * @param {string} user - The user's ID
	 * @returns The response from the server.
	 */
	unmuteUser(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It unmutes a player
	 * @param {string} player - The player's name
	 * @returns A promise.
	 */
	unmutePlayer(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It warps a player user to a location
	 * @param {string} player - The player's name
	 * @param {string} mapid - The ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	playerWarpTo(player: string, mapid: string) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
	}

	/**
	 * It warps a user to a map
	 * @param {string} user - The user's username
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	userWarpTo(user: string, mapid: string) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
	}

	/**
	 * It warps a user to a location on a map
	 * @param {string} user - The user you want to warp.
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @param {number} x - The x coordinate of the location you want to warp to.
	 * @param {number} y - number,
	 * @returns The response from the server.
	 */
	userWarpToLoc(user: string, mapid: string, x: number, y: number) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid,
				x: x,
				y: y
			})
		})
	}

	/**
	 * It sends a POST request to the server with the player's ID, the map ID, and the X and Y coordinates
	 * @param {string} player - The player's name
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @param {number} x - number, y: number
	 * @param {number} y - number,
	 * @returns The response from the server.
	 */
	playerWarpToLoc(player: string, mapid: string, x: number, y: number) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid,
				x: x,
				y: y
			})
		})
	}

	/**
	 * It kill a player by their ID
	 * @param {string} user - The username of the user you want to kill.
	 * @returns The response from the server.
	 */
	killUser(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It kills a player by their name
	 * @param {string} player - The player's username
	 * @returns The response from the server.
	 */
	killPlayer(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
}