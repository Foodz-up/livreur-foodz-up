import { IUser } from '~/store/interfaces/user'
export class AuthStoreState {
  user: IUser | null = null
  token: any | null = null
}
