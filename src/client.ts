import { Main } from './lib/main.js'
export class Client {
	_main: Main
	constructor(url: string, username: string, password: string) {
		this._main = new Main(url, username, password)
	}

	/**
     * 
     * @param {*} token 
     */
	async getPlayersList(options = {}) {
		return this._main.getPlayersList(options)
	}

	async getCharFromAcc(options = {}) {
		return this._main.getCharacterFromAccount(options)
	}
}