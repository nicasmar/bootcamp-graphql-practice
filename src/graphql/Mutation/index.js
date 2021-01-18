const merge = require('lodash.merge')
const Author = require('./Author')
const Auth = require('./Auth')

const resolvers = [Author, Auth]
module.exports = merge(...resolvers)
