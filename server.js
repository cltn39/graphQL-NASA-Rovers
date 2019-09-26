const { GraphQLServer } = require('graphql-yoga')
 
const typeDefs = `
  type Query {
    information: String
    rover(roverName: String): String
  }
`
 
const resolvers = {
  Query: {
    information: () => "This is a graphql server",
  },
}
 
const server = new GraphQLServer({ typeDefs, resolvers })
server.start({port:5000}, () => console.log('Server is running on localhost:5000'))