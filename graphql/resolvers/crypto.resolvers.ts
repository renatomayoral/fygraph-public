import cLatestQuery from '../functions/crypto-query/latestQuery'
import { DateTimeResolver } from 'graphql-scalars'



export default {
  Query: {
    info: () => `Empowering people with FyGraph API `,
    getCryptoLatest: cLatestQuery,
  },
  DateTime: DateTimeResolver,
}
