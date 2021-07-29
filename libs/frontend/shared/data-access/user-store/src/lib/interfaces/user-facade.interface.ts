import { Observable } from 'rxjs';
import { IUser } from '@mean/shared/data-access/interfaces';


/**
 * User facade
 */
export abstract class IUserFacade {


 public user$?: Observable<IUser>

}
