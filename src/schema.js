import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers';

const typeDefs = `

    type Query {
        profile(_id: ID): Profile
        users: [Profile]
    }

    type Profile {
        _id: ID,
        username: String,
        email: String,
        password: String,
        rol: String,
        salary: String,
        date: String,
        date2: String,
        lastName: String,
        address: String
    }

    type Mutation {
        createUser(input: ProfileInput): Profile
        updateUser(_id: ID, input: ProfileUpdateInput): Profile
        deleteUser(_id: ID): Profile
    }

    input ProfileUpdateInput {
        _id: ID,
        username: String!,
        email: String!,
        password: String!,
        rol: String!,
        salary: String,
        date: String,
        date2: String,
        lastName: String,
        address: String
    }

    input ProfileInput {
        _id: ID,
        username: String!,
        email: String!,
        password: String!,
        rol: String!,
        salary: String,
        date: String,
        date2: String,
        lastName: String,
        address: String
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})