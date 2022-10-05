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
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	getAuthorized() {
		return fetch(`${this._url}/api/v1/info/authorized`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getInfo() {
		return fetch(`${this._url}/api/v1/info`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getStats() {
		return fetch(`${this._url}/api/v1/info/stats`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getConfig() {
		return fetch(`${this._url}/api/v1/info/config`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
}