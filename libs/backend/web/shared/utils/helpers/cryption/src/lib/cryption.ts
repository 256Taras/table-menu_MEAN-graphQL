// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import crypto from 'crypto';

export class Cryption {
  private static saltRoundsDefault = 10;
  private static keyLengthDefault = 64;

  public static getHash(
    password: string,
    keyLength?: number,
    saltRounds?: number
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      // generate random 16 bytes long salt
      const salt = crypto
        .randomBytes(saltRounds || this.saltRoundsDefault)
        .toString('hex');

      crypto.scrypt(
        password,
        salt,
        keyLength || this.keyLengthDefault,
        (err, derivedKey) => {
          if (err) reject(err);
          resolve(salt + ':' + derivedKey.toString('hex'));
        }
      );
    });
  }

  public static compareHash(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const [salt, key] = passwordHash.split(':');
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(key == derivedKey.toString('hex'));
      });
    });
  }
}
