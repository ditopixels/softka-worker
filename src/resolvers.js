import Users from './models/Users.js'

export const resolvers = {
    Query:{
        async profile(root,{_id}){
            return await Users.findById(_id)
        },
        async users(){
            return await Users.find()
        }
    },
    Mutation:{
        async createUser(_,{input}){
            const newUser = new Users(input)
            await newUser.save()
            return newUser
        },
        async deleteUser(_,{_id}){
            return await Users.findOneAndDelete(_id)
        },
        async updateUser(_,{_id,input}){
            return await Users.findByIdAndUpdate(_id,input, {new:true})
        }
    }
}