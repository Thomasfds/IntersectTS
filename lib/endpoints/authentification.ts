/*
	Endpoint: /authentification
	Description: Authentification endpoint
	DOCUMENTATION URL: https:docs.freemmorpgmaker.com/en-US/api/v1/endpoints/authentication.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\authentification.ts
	IE Require: None
*/

/**
 * @documentation https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/authentication.html#get-token
 * @param url The https://url:port of the server
 * @param username The username of the API user
 * @param password The password of the API user
 * @returns The token
 */
export function getToken(url: string, username: string, password: string) {
	return fetch(`${url}/api/oauth/token`, {
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

export function refreshToken(url: string, token: unknown) {
	return fetch(`${url}/api/oauth/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			grant_type: 'refresh_token',
			refresh_token: token
		})
	})
}

export function deleteToken(url: string, token: string, user: string) {
	return fetch(`${url}/api/oauth/token/${user}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function deleteTokenById(url: string, token: string, user: string) {
	return fetch(`${url}/api/oauth/token/${user}/${token}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}