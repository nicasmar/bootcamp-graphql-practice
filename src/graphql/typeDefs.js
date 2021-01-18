const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id: ID!): Author!
    bookById(id: ID!): Book!
    allAuthors: [Author!]!
  }

  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addAuthor(input: addAuthorInput!): Author!
    deleteAuthor(input: deleteAuthorInput!): Author!
    addBook(input: addBookInput!): Book!
  }
  
  input RegisterInput {
    email: String!
    password: String!
  }

  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int
  }

  input deleteAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
  }
  input addBookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
  }
  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  type AuthReturn {
    token: String!
    user: User!
  }
  type Author {
    id: ID!
    firstName: String
    lastName: String
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
    books: [Book!]
    createdAt: String!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  
`
