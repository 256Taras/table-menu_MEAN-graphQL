import { IActionForcePayload } from '@mean/shared/utils/interfaces';
import { ActionCreatorProps, props } from '@ngrx/store';

/**
 * @description
 * Create payload force action
 */

export function payloadForce<
  P extends Record<string, unknown>
>(): ActionCreatorProps<{ payload: P & IActionForcePayload }> {
  return props<{ payload: P & IActionForcePayload }>();
}
