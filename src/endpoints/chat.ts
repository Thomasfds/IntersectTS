/*
	Endpoint: /chat
	Description: chat endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/chat.html
	Author: AriusII
	Language: typescript
	Path: src\lib\endpoints\chat.ts
*/

export function globalMessage(url: string, token: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
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

export function proximityMessage(url: string, token: string, mapid: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
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

export function directMessage(url: string, token: string, user: string, message: string, color?: { a: number, r: number, g: number, b: number }, target?: string) {
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