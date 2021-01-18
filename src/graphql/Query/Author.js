const Address = require('../../models/Address')
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async() => {
    try {
      const authors = await Author.query()
      return authors
    } catch (err) {
        console.log(err)
        throw new Error('failed to get authors')
    }
}

const books = async({ id }, params, context) => {
    const b = await Book.query().where('authorId', id)
    return b
}

const address = async({ addressId }, params, context) => {
    const a = await Address.query().findOne('id', addressId)
    return a
}

const resolver = {
    Query: {
        allAuthors,
    },
    Author: {
        books,
        address,
    }
}

module.exports = resolver