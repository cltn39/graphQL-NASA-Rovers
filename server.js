const { GraphQLserver } = require( 'graphql-yoga' );
const { getRover } = require('./api');
const typeDefs = `
type Query {
    information: String
    rover(roverName: Strong): Rover
}

type Rovers {
    name: String
    landingDate: string
    launchDate: String
    status: String
    maxSole: Int
    maxDate: String
    totlaPhotos: Int
    photos: [photo]
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
const server = new GraphQLserver ({
    typeDefs,
    resolvers
})

server.start({port:5000}, () => console.log('Server is running on localhost:5000'))