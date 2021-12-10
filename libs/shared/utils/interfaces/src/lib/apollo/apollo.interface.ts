import { DocumentNode } from 'graphql';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

/**
 * Apollo request
 */
export interface IApolloRequest {
  /**
   * Request entity keys
   */
  keys?: string[];
  /**
   * Apollo request query
   */
  query: DocumentNode;
}


export type TApolloResponse<// eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  R extends ApolloError = ApolloError> = Observable<T | R>;

/**
 * A function that accepts ApolloQueryResult and the optional entityKeys field.
 * If entityKeys is not specified, result.data is returned, otherwise the element is taken by key
 * @constructor
 */
export function ExtractApolloResponse<T = any>(result: ApolloQueryResult<T>, entityKeys?: string[]) {
  const key = !!entityKeys && !entityKeys.length ? Object.keys(entityKeys) : entityKeys;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
 return  key?.length === 1 ? result.data[key?.[0]] : result.data;
}
