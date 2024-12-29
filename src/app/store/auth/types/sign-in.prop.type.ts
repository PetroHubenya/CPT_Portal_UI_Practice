import { IUser } from "../../../modules/shared/interfaces/user-management/user.interface";

export type ISignInProp = {
  isAuth: boolean,
  user: IUser
};
