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
        salary: String
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
        salary: String
    }

    input ProfileInput {
        _id: ID,
        username: String!,
        email: String!,
        password: String!,
        rol: String!,
        salary: String
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})