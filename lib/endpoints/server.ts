/*
	Endpoint: /server
	Description: server endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/info.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\server.ts
    IE Require: None
*/
export class Server {
	constructor() {
	}
	
	getAuthorized(url: string, token: string) {
		return fetch(`${url}/api/v1/info/authorized`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getInfo(url: string, token: string) {
		return fetch(`${url}/api/v1/info`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getStats(url: string, token: string) {
		return fetch(`${url}/api/v1/info/stats`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getConfig(url: string, token: string) {
		return fetch(`${url}/api/v1/info/config`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}
}