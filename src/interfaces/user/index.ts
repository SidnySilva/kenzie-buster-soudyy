export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}