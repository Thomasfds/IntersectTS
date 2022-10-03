/*
	Endpoint: /Admin Actions
	Description: Admin Actions endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/admin.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\admin.ts
	IE Require: Users.Query role
*/

export function banPlayer(url: string, token: string, player: string, duration: BigInteger, reason: string, moderator: string, ip: boolean) {
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

export function banUser(url: string, token: string, user: string, duration: number, reason: string, moderator: string, ip: boolean) {
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

export function unbanUser(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/users/${user}/admin/unban`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function unbanPlayer(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/admin/unban`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function kickUser(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/users/${user}/admin/kick`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function kickPlayer(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/admin/kick`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function muteUser(url: string, token: string, user: string, duration: number, reason: string, moderator: string, ip: boolean) {
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

export function mutePlayer(url: string, token: string, player: string, duration: number, reason: string, moderator: string, ip: boolean) {
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

export function unmuteUser(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/users/${user}/admin/unmute`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function unmutePlayer(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/admin/unmute`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function playerWarpTo(url: string, token: string, player: string, mapip: string) {
	return fetch(`${url}/api/v1/players/${player}/admin/warpto`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			mapip: mapip
		})
	})
}

export function userWarpTo(url: string, token: string, user: string, mapip: string) {
	return fetch(`${url}/api/v1/users/${user}/admin/warpto`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			mapip: mapip
		})
	})
}

export function userWarpToLoc(url: string, token: string, user: string, mapip: string, x: number, y: number) {
	return fetch(`${url}/api/v1/users/${user}/admin/warpto`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			mapip: mapip,
			x: x,
			y: y
		})
	})
}

export function playerWarpToLoc(url: string, token: string, player: string, mapip: string, x: number, y: number) {
	return fetch(`${url}/api/v1/players/${player}/admin/warpto`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			mapip: mapip,
			x: x,
			y: y
		})
	})
}

// create two methodes for user and player
// this method will kill the player or user
export function killUser(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/users/${user}/admin/kill`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function killPlayer(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/admin/kill`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}