/*
	Endpoint: /logs
	Description: logs endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/logs.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\logs.ts
    IE Require: None
*/
export class Logs {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	playerActivity(player: string) {
		return fetch(`${this._url}/api/v1/logs/player/${player}/activity`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	userActivity(user: string) {
		return fetch(`${this._url}/api/v1/logs/user/${user}/activity`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	userActivityByIP(user: string) {
		return fetch(`${this._url}/api/v1/logs/user/${user}/ip`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
}