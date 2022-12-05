import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
import {createContext} from './context'
import security from './components/security';

const port = process.env.PORT || 4000
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ 
  schema,
  graphiql: true, 
  context: createContext,
  plugins: [security]
})

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(port, () => {
 console.info('Graphql Server is running on http://localhost:4000/graphql', port)
})