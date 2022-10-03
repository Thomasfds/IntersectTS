/*
	Endpoint: /gameobjects
	Description: gameobjects endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/gameobjects.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\gameobjects.ts
    IE Require: None
*/

export function getList(url: string, token: string, type: string, page: number, count: number) {
	return fetch(`${url}/api/v1/gameobjects/${type}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			page: page,
			count: count
		})
	})
}
/**
 * How to get the type of a gameobject check: 
 * https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/gameobjects.html#object-types
 */
export function getObject(url: string, token: string, type: string, id: string) {
	return fetch(`${url}/api/v1/gameobjects/${type}/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function getTime(url: string, token: string) {
	return fetch(`${url}/api/v1/gameobjects/time`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}