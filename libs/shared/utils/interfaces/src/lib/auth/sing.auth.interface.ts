export interface ISignAuthPayload {
  username: string;
  password: string;
}
export interface ISignAuthResponse {
  accessToken: string;
  expiresIn: number;
  id: number;
}

export interface ISignUpPayload {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
}
