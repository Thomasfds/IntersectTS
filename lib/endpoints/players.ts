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
	
	async playersList(page?: number, pageSize?: number, limit?: number) {
		const res = await fetch(`${this._url}/api/v1/players`, {
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
		return await res.json()
	}

	async playerRank(page?: number, pageSize?: number, limit?: number, sort?: string) {
		const res = await fetch(`${this._url}/api/v1/players/rank`, {
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
		return await res.json()
}

	async playersOnline(page?: number, count?: number) {
		const res = await fetch(`${this._url}/api/v1/players/online`, {
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
		return await res.json()
	}

	async playerOnlineCount() {
		const res = await fetch(`${this._url}/api/v1/players/online/count`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async playerLookup(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async playerVariables(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/variables`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async playerVariable(player: string, variable: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/variables/${variable}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getPlayerVariableValue(player: string, variable: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/variables/${variable}/value`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async setPlayerVariableValue(player: string, variable: string, value: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/variables/${variable}/value`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				value: value
			})
		})
		return await res.json()
	}

	async getPlayerItems(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/items`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getPlayerInventoryItems(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/items/inventory`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getPlayerBankItems(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/items/bank`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getPlayerBag(player: string, bag: string) {
		const res = await fetch(`${this._url}/api/v1/players/bag/${bag}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async givePlayerItem(player: string, item: string, amount: number, bankoverflow?: boolean) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/items/give`, {
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
		return await res.json()
	}

	async takePlayerItem(player: string, item: string, amount: number) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/items/take`, {
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
		return await res.json()
	}

	async getPlayerSpells(player: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/spells`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async givePlayerSpell(player: string, spell: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/spells/teach`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				spellid: spell
			})
		})
		return await res.json()
	}

	async takePlayerSpell(player: string, spell: string) {
		const res = await fetch(`${this._url}/api/v1/players/${player}/spells/forget`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				spellid: spell
			})
		})
		return await res.json()
	}
}