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
	 * @param {string} player - The player's name.
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban.
	 * @param {string} moderator - The name of the moderator who banned the player.
	 * @param {boolean} ip - boolean - Whether or not to ban the player's IP address.
	 * @returns The response from the server.
	 */
	async banPlayer(player: string, duration: number, reason: string, moderator: string, ip?: boolean) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip ? ip : false
			})
		})
		return await res.json()
	}

	/**
	 * It bans a user from the server
	 * @param {string} user - The user's name.
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban.
	 * @param {string} moderator - The moderator who banned the user.
	 * @param {boolean} ip - boolean - Whether or not to ban the user's IP address.
	 * @returns The response from the server.
	 */
	async banUser(user: string, duration: number, reason: string, moderator: string, ip?: boolean) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip ? ip : false
			})
		})
		return await res.json()
	}

	/**
	 * It unban's a user
	 * @param {string} user - The user's name.
	 * @returns The response from the server.
	 */
	async unbanUser(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It unban's a player
	 * @param {string} player - The player's name.
	 * @returns The response from the server.
	 */
	async unbanPlayer(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It kicks a user from the server
	 * @param {string} user - The user's name.
	 * @returns The response from the server.
	 */
	async kickUser(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It kicks a player from the server
	 * @param {string} player - The player's name.
	 * @returns The response from the server.
	 */
	async kickPlayer(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It mutes a user
	 * @param {string} user - The user's name.
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute.
	 * @param {string} moderator - The moderator who is muting the user.
	 * @param {boolean} ip - boolean - Whether or not to mute the user's IP address.
	 * @returns The response from the server.
	 */
	async muteUser(user: string, duration: number, reason: string, moderator: string, ip?: boolean) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip ? ip : false
			})
		})
		return await res.json()
	}

	/**
	 * It mutes a player
	 * @param {string} player - The player's name.
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute.
	 * @param {string} moderator - The name of the moderator who is muting the player.
	 * @param {boolean} ip - boolean - Whether or not to mute the player's IP address.
	 * @returns The response from the server.
	 */
	async mutePlayer(player: string, duration: number, reason: string, moderator: string, ip?: boolean) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				duration: duration,
				reason: reason,
				moderator: moderator,
				ip: ip ? ip : false
			})
		})
		return await res.json()
	}

	/**
	 * It unmutes a user
	 * @param {string} user - The user's name.
	 * @returns The response from the server.
	 */
	async unmuteUser(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It unmutes a player
	 * @param {string} player - The player's name.
	 * @returns The response from the server.
	 */
	async unmutePlayer(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It warps a player user to a map location
	 * @param {string} player - The player's name.
	 * @param {string} mapid - The ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	async playerWarpTo(player: string, mapid: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
		return await res.json()
	}

	/**
	 * It warps a user to a map location
	 * @param {string} user - The user's name.
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	async userWarpTo(user: string, mapid: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
		return await res.json()
	}

	/**
	 * It warps a user to a location on a map
	 * @param {string} user - The user's name you want to warp.
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @param {number} x - The x coordinate of the location you want to warp to.
	 * @param {number} y - The y coordinate of the location you want to warp to.
	 * @returns The response from the server.
	 */
	async userWarpToLoc(user: string, mapid: string, x: number, y: number) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/warpto`, {
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
		return await res.json()
	}

	/**
	 * It sends a POST request to the server with the player's ID, the map ID, and the X and Y coordinates
	 * @param {string} player - The player's name you want to warp.
	 * @param {string} mapid - The ID of the map you want to warp to.
	 * @param {number} x - The x coordinate of the location you want to warp to.
	 * @param {number} y - The y coordinate of the location you want to warp to.
	 * @returns The response from the server.
	 */
	async playerWarpToLoc(player: string, mapid: string, x: number, y: number) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/warpto`, {
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
		return await res.json()
	}

	/**
	 * It kill a player by their ID
	 * @param {string} user - The users's name you want to kill.
	 * @returns The response from the server.
	 */
	async killUser(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It kills a player by their name
	 * @param {string} player - The player's name you want to kill.
	 * @returns The response from the server.
	 */
	async killPlayer(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}