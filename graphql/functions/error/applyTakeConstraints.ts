import { GraphQLError } from 'graphql'

export const applyTakeConstraints = (params: { min: number; max: number; value: number }) => {
    if (params.value < params.min || params.value > params.max) {
      throw new GraphQLError(
        `'limit' argument value '${params.value}' is outside the valid range of '${params.min}' to '${params.max}'.`
      )
    }
    return params.value
  }
