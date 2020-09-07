'use strict'

import mongodb from 'mongodb'

export default async function buildDb() {
	const MongoClient = mongodb.MongoClient
	const url = 'mongodb://localhost:27017'
	const dbName = 'book_api_db'
	const client = new MongoClient(url, {useNewUrlParser: true})
	await client.connect()
	const db = await client.db(dbName)
	db.makeId = makeIdFromString
	return db
}

function makeIdFromString(id) {
	console.log(id)
	return new mongodb.ObjectID(id)
}