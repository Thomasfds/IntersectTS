/**
 * This is the Admin Class, it contains all the admin actions from the API.
 * Some of these actions require the Users.Query role.
 * @class Admin
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/admin.html
 * @author AriusII
 */
export class Admin {
	constructor() {
	}
	
	/**
	 * It bans a player from the server
	 * @param {string} url - The URL of the server you want to ban the player on.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's name
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban
	 * @param {string} moderator - The name of the moderator who banned the player.
	 * @param {boolean} ip - boolean - Whether or not to ban the player's IP address.
	 * @returns A promise.
	 */
	banPlayer(url: string, token: string, player: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${url}/api/v1/players/${player}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of your Rocket.Chat server.
	 * @param {string} token - The token of the user you want to ban.
	 * @param {string} user - The user's ID
	 * @param {number} duration - The duration of the ban in seconds.
	 * @param {string} reason - The reason for the ban
	 * @param {string} moderator - The moderator who banned the user.
	 * @param {boolean} ip - boolean - Whether or not to ban the user's IP address.
	 * @returns A promise.
	 */
	banUser(url: string, token: string, user: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${url}/api/v1/users/${user}/admin/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of the instance you're trying to access.
	 * @param {string} token - The token of the user who is unbanning the user.
	 * @param {string} user - The user's ID
	 * @returns The response from the server.
	 */
	unbanUser(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It unban's a player
	 * @param {string} url - The url of the server you want to unban the player from.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's username
	 * @returns A promise.
	 */
	unbanPlayer(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/admin/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It kicks a user from the server
	 * @param {string} url - The URL of the server you want to kick the user from.
	 * @param {string} token - The token of the user who is kicking the user.
	 * @param {string} user - The user's ID
	 * @returns A promise.
	 */
	kickUser(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It kicks a player from the server
	 * @param {string} url - The url of the server you want to kick the player from.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's username
	 * @returns A promise.
	 */
	kickPlayer(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/admin/kick`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It mutes a user
	 * @param {string} url - The URL of your Rocket.Chat server.
	 * @param {string} token - The token of the user you want to mute.
	 * @param {string} user - The user's ID
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute
	 * @param {string} moderator - The moderator who is muting the user.
	 * @param {boolean} ip - boolean - Whether or not to mute the user's IP address.
	 * @returns The response from the server.
	 */
	muteUser(url: string, token: string, user: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${url}/api/v1/users/${user}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of your server.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's name
	 * @param {number} duration - The duration of the mute in seconds.
	 * @param {string} reason - The reason for the mute
	 * @param {string} moderator - The name of the moderator who is muting the player.
	 * @param {boolean} ip - boolean - Whether or not to mute the player's IP address.
	 * @returns A promise.
	 */
	mutePlayer(url: string, token: string, player: string, duration: number, reason: string, moderator: string, ip: boolean) {
		return fetch(`${url}/api/v1/players/${player}/admin/mute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of the Rocket.Chat server
	 * @param {string} token - The token of the user who is unmuting the user.
	 * @param {string} user - The user's ID
	 * @returns The response from the server.
	 */
	unmuteUser(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It unmutes a player
	 * @param {string} url - The url of the server you want to send the request to.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's name
	 * @returns A promise.
	 */
	unmutePlayer(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/admin/unmute`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It warps a player user to a location
	 * @param {string} url - The URL of the server you're trying to connect to.
	 * @param {string} token - The token you get from the login function
	 * @param {string} player - The player's name
	 * @param {string} mapid - The ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	playerWarpTo(url: string, token: string, player: string, mapid: string) {
		return fetch(`${url}/api/v1/players/${player}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
	}

	/**
	 * It warps a user to a map
	 * @param {string} url - The URL of the server you're trying to connect to.
	 * @param {string} token - The token you got from the login function
	 * @param {string} user - The user's username
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @returns The response from the server.
	 */
	userWarpTo(url: string, token: string, user: string, mapid: string) {
		return fetch(`${url}/api/v1/users/${user}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				mapid: mapid
			})
		})
	}

	/**
	 * It warps a user to a location on a map
	 * @param {string} url - The URL of the server you're trying to connect to.
	 * @param {string} token - The token you got from the login function
	 * @param {string} user - The user you want to warp.
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @param {number} x - The x coordinate of the location you want to warp to.
	 * @param {number} y - number,
	 * @returns The response from the server.
	 */
	userWarpToLoc(url: string, token: string, user: string, mapid: string, x: number, y: number) {
		return fetch(`${url}/api/v1/users/${user}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of your server.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's name
	 * @param {string} mapid - The map ID of the map you want to warp to.
	 * @param {number} x - number, y: number
	 * @param {number} y - number,
	 * @returns The response from the server.
	 */
	playerWarpToLoc(url: string, token: string, player: string, mapid: string, x: number, y: number) {
		return fetch(`${url}/api/v1/players/${player}/admin/warpto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of the Rocket.Chat server
	 * @param {string} token - The token you got from the login function
	 * @param {string} user - The username of the user you want to kill.
	 * @returns The response from the server.
	 */
	killUser(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It kills a player
	 * @param {string} url - The url of the server you want to send the request to.
	 * @param {string} token - The token you got from the login function
	 * @param {string} player - The player's username
	 * @returns The response from the server.
	 */
	killPlayer(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/admin/kill`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}
}