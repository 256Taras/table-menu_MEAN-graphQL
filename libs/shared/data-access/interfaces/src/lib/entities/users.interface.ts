/**
 * interface user
 *
 * provides an entity interface user
 */
export interface IUser {
  /**
   * user ID
   */
  id: number;

  /**
   * user email
   */
  email: string;

  /**
   * user ID
   */
  password: string;


  /**
   * user phone (optional)
   */
  phone?: string;


  /**
   *user name
   */
  username: string;


  /**
   *user nick (option)
   */
  nickname?: string;


  /**
   * user created date
   */
  created: string;


  /**
   * user updated date
   */
  updated: string;
}
