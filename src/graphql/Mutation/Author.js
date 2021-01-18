const Address = require('../../models/Address')
const Author = require('../../models/Author')

const addAuthor = async(obj, { input }, context) => {
    try {
      const author = await Author.query().insert({
          firstName: input.firstName,
          lastName: input.lastName,
          age: input.age,
          email: input.email
      })
      return author
    } catch (err) {
        console.log(err)
        throw new Error('failed to create authors')
    }
}

const deleteAuthor = async(obj, { input }, context) => {
    try {
      const author = await Author.query().delete().where({
          firstName: input.firstName,
          lastName: input.lastName,
      })
      return author
    } catch (err) {
        console.log(err)
        throw new Error('failed to delete authors')
    }
}

const resolver = {
    Mutation: {
        addAuthor,
        deleteAuthor
    }
}

module.exports = resolver