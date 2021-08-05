import {gql} from '@apollo/client'
import { IApolloRequest } from '@mean/shared/utils/interfaces'


export const userRequest: IApolloRequest = {
  keys: ['user'],
  query: gql`
    query {
      user {
        id
        username
        password
        nickname
        email
        phone
        created
        updated
      }
    }
  `,
}
