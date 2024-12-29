import { IUser } from "../../../modules/shared/interfaces/user-management/user.interface";

export interface IAuthState {
  isAuth: boolean,
  user: IUser | null
}
