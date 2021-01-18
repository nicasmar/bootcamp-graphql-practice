const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')

const resolvers = [Author]

module.exports = merge(...resolvers)
