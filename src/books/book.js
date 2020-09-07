'use strict'

import Joi from 'joi'
import upperFirst from '../helpers/upper-first'

const schema = Joi.object.keys({
	title: Joi.string().max(30).required(), 
	author: Joi.string().min(4).max(20).required(),
	type: Joi.string().max(10).required(),
	genre: Joi.array().ordered(Joi.string().alphanum().min(2).required()).sort('ascending').required(),
	lang: Joi.string().min(2).max(4).lowercase().default('en'),
	rating: Joi.number().positive().max(5).required(),
	isbn: Joi.string().alphanum().required(),
	cover: Joi.string().dataUri(),
	description: Joi.string().max(300).required()
})

export default function buildBook(bookInfo = {}) {
	const validBook = Joi.validate(bookInfo, schema)
	const normalBook = normalize(validBook)
	return Object.freeze(normalBook)

	function normalize({title, author, ...otherInfo}) {
		return {
			...otherInfo,
			title: upperFirst(title),
			author: upperFirst(author)
		}
	}
}