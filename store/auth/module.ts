import { AuthStoreState } from '~/store/auth/state'
import { IToken, IUser } from '~/store/interfaces/user'

export const AuthStoreModule = {
  namespaced: false,
  state: () => ({ ...new AuthStoreState() }),
  getters: {
    user (state: AuthStoreState): IUser | null {
      return state.user
    },
    token (state: AuthStoreState): IToken | null {
      return state.token
    }
  },
  mutations: {
    setUser (state: AuthStoreState, user: IUser | null) {
      state.user = user
    },
    setToken (state: AuthStoreState, token: IToken | null) {
      state.token = token
    },
    updateUser (state: AuthStoreState, user: any) {
      state.user = {
        ...state.user,
        ...user
      }
    }
  }
}
