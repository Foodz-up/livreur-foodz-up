import { AuthStoreState } from '~/store/auth/state'
import { IUser } from '~/store/interfaces/user'

export const AuthStoreModule = {
  namespaced: false,
  state: () => ({ ...new AuthStoreState() }),
  getters: {
    user (state: AuthStoreState): any {
      return state.user
    },
    token (state: AuthStoreState): any {
      return state.token
    }
  },
  mutations: {
    setUser (state: AuthStoreState, user: any) {
      state.user = user
    },
    setToken (state: AuthStoreState, token: any) {
      state.token = token
    },
    updateUser (state: AuthStoreState, user: IUser) {
      state.user = {
        ...state.user,
        ...user
      }
    }
  }
}
