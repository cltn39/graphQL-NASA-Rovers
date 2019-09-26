const { GraphQLServer } = require('graphql-yoga');
const { getRover } = require('./api');

const typeDefs = `
  type Query {
    information: String
    rover(roverName: String): Rovers
  }

  type Rovers {
      name: String
      landingDate: String
      launchDate: String
      status: String
      maxSole: Int
      maxDate: String
      totalPhotos: Int
      photos: [Photo]
  }

  type Photo {
      id: Int
      sol: Int
      src: String
      earthDate: String
  }
`
 
const resolvers = {
  Query: {
    information: () => "This is a graphql server",
    rover: (root, args) => getRover(args.roverName)
  }
}
 
const server = new GraphQLServer({ typeDefs, resolvers })
server.start({port:5000}, () => console.log('Server is running on localhost:5000'))