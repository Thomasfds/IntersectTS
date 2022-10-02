import { Client } from './src/client.js'
const client = new Client('http://82.64.190.33:5402', 'admin', '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918')
//console.log(await client.token)
/* const opts = {
    page: 0,
    pageSize: 4,
    limit: 1

} */

const opts = [
	'admin',
	'admini'
]

//console.log(await client.getPlayersList(opts))
console.log(await client.getCharFromAcc(opts))