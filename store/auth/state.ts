import { IUser, IToken } from '~/store/interfaces/user'
export class AuthStoreState {
  user: IUser | null = null
  token: IToken | null = null
}
