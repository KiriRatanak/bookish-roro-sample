import buildDb from '../src/db'
import { internet } from 'faker'

const database = buildDb()

decribe('Books Repository', async () => {
	beforeAll(() => {})

	it.todo('adds a book')
	it.todo('removes a book')
	it.todo('lists books')
	it.todo('updates a book info')
	it.todo('supports pagination')
	it.todo('supports page skip')
	it.todo('requires a new book to have a unique isbn number')
	it.todo('requires a new book to have a unique book id')
	it.todo('finds a book by id')
	it.todo('finds a book by title')
	it.todo('finds a book by author')
	it.todo('finds a book by genre')
	it.todo('finds a book by isbn number')
})