//File responsable for Graphql Security Armor Configuration
import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';


const armor = {
    maxDepth: {
      enabled: true,
      n: 3
    },
    costLimit:{
      enabled: true,
      maxCost: 50, 
      ignoreIntrospection: true,
    },
    maxAliases:{
      enabled:true,
      n: 1
    },
    characterLimit: {
        enable:true,
        maxLength: 1000,
    }
  }
  const security = EnvelopArmorPlugin(armor) 
  export default security