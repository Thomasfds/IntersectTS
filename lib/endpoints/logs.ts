/*
	Endpoint: /logs
	Description: logs endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/logs.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\logs.ts
    IE Require: None
*/

export function playerActivity(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/logs/player/${player}/activity`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function userActivity(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/logs/user/${user}/activity`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function userActivityByIP(url: string, token: string, user: string) {
	return fetch(`${url}/api/v1/logs/user/${user}/ip`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}