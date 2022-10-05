/*
	Endpoint: /players
	Description: players endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/players.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\players.ts
    IE Require: None
*/
export class Players {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	playersList(page?: number, pageSize?: number, limit?: number) {
		return fetch(`${this._url}/api/v1/players`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				pageSize: pageSize,
				limit: limit
			})
		})
	}

	playerRank(page?: number, pageSize?: number, limit?: number, sort?: string) {
		return fetch(`${this._url}/api/v1/players/rank`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				pageSize: pageSize,
				limit: limit,
				sort: sort
			})
		})
}

	playersOnline(page?: number, count?: number) {
		return fetch(`${this._url}/api/v1/players/online`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				count: count
			})
		})
	}

	playerOnlineCount() {
		return fetch(`${this._url}/api/v1/players/online/count`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	playerLookup(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	playerVariables(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/variables`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	playerVariable(player: string, variable: string) {
		return fetch(`${this._url}/api/v1/players/${player}/variables/${variable}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getPlayerVariableValue(player: string, variable: string) {
		return fetch(`${this._url}/api/v1/players/${player}/variables/${variable}/value`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	setPlayerVariableValue(player: string, variable: string, value: string) {
		return fetch(`${this._url}/api/v1/players/${player}/variables/${variable}/value`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				value: value
			})
		})
	}

	getPlayerItems(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/items`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getPlayerInventoryItems(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/items/inventory`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getPlayerBankItems(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/items/bank`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getPlayerBag(player: string, bag: string) {
		return fetch(`${this._url}/api/v1/players/bag/${bag}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	givePlayerItem(player: string, item: string, amount: number, bankoverflow?: boolean) {
		return fetch(`${this._url}/api/v1/players/${player}/items/give`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				itemid: item,
				quantity: amount,
				bankoverflow: bankoverflow
			})
		})
	}

	takePlayerItem(player: string, item: string, amount: number) {
		return fetch(`${this._url}/api/v1/players/${player}/items/take`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				itemid: item,
				quantity: amount
			})
		})
	}

	getPlayerSpells(player: string) {
		return fetch(`${this._url}/api/v1/players/${player}/spells`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	givePlayerSpell(player: string, spell: string) {
		return fetch(`${this._url}/api/v1/players/${player}/spells/teach`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				spellid: spell
			})
		})
	}

	takePlayerSpell(player: string, spell: string) {
		return fetch(`${this._url}/api/v1/players/${player}/spells/forget`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				spellid: spell
			})
		})
	}
}