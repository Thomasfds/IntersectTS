import { Admin } from './endpoints/admin'
import { Authentification } from './endpoints/authentification'
import { Chat } from './endpoints/chat'
import { GameObjects } from './endpoints/gameobjects'
import { Logs } from './endpoints/logs'
import { Players } from './endpoints/players'
import { Server } from './endpoints/server'
import { Users } from './endpoints/users'
import { Variables } from './endpoints/variables'

/**
 * @class Client
 * @description The main class of the API
 * @link API documentation: https://docs.freemmorpgmaker.com/en-US/api/v1/
 * @param {string} url The url of the API
 * @param {string} port The port of the API
 * @param {string} username The username of the API
 * @param {string} password The password of the API
 * @return {Client} The client
 */
export class Client {
	private _url: string
	private _username: string
	private _password: string
	private _token: string
	public Admin: Admin
	public Auth: Authentification
	public Chat: Chat
	public GameObjects: GameObjects
	public Logs: Logs
	public Players: Players
	public Server: Server
	public Users: Users
	public Variables: Variables
	
	constructor(url: string, port: string, username: string, password: string) {
		// Constructor things
		this._url = `${url}:${port}`
		this._username = username
		this._password = password
		this._token = this.initToken() as string

		// Endpoints Classes things
		this.Admin = new Admin()
		this.Auth = new Authentification()
		this.Chat = new Chat()
		this.GameObjects = new GameObjects()
		this.Logs = new Logs()
		this.Players = new Players()
		this.Server = new Server()
		this.Users = new Users()
		this.Variables = new Variables()

		// we want to setInterval to refresh the token every 5 minutes, = 300000 ms
		setInterval(() => {
			return this._token = this.Auth.refreshToken(this._url, this._token) as unknown as string
		}, 300000)

	}
	
	private initToken(): unknown {
		return this.Auth.getToken(this._url, this._username, this._password).then(response => {
			return response.json()
		}).then(json => {
			return json.access_token
		})
	}
}