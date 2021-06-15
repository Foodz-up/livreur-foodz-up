// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { AuthStoreModule } from '~/store/auth/module'
import { AuthStoreState } from '~/store/auth/state'
import { IUser } from '~/store/interfaces/user'

class AuthStore extends BaseStoreService<AuthStoreState> {
  public mutations = AuthStoreModule.mutations
  public getters = AuthStoreModule.getters

  // async init(token: string) {
  //   store().$api.setToken(token)
  //   const user = await store().$api.user.me()
  //   this.setUser(user)
  //   await this.fetchMagasins()
  //   this.setCurrentMagasin(this.magasins[0]?.id)
  //   await this.fetchProjets()
  // }

  setToken (token: any) {
    this.commit(this.mutations.setToken, token)
  }

  get user (): IUser {
    return this.read<IUser>(this.getters.user)
  }

  get token (): any {
    return this.read<any>(this.getters.token)
  }

  setUser (user: IUser) {
    this.commit(this.mutations.setUser, user)
  }

  logout () {
    this.commit(this.mutations.setUser, null)
  }
}
export default new AuthStore()
