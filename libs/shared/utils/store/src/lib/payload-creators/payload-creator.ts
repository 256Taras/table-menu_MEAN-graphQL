import { ActionCreatorProps, props } from '@ngrx/store';


/**
 * @description
 * Create payload action
 */

export function payload<P>(): ActionCreatorProps<{ payload: P }> {
  return props<{ payload: P }>();
}
