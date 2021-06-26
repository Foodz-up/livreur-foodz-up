// import store from '../../store'
import { IChangePassword } from '../interfaces'
import BaseStoreService from '~/store/abstract'
import { AuthStoreModule } from '~/store/auth/module'
import { AuthStoreState } from '~/store/auth/state'
import { IToken, IUser } from '~/store/interfaces/user'
import axios from '~/plugins/axios'

class AuthStore extends BaseStoreService<AuthStoreState> {
  public mutations = AuthStoreModule.mutations
  public getters = AuthStoreModule.getters

  setToken (token: IToken) {
    this.commit(this.mutations.setToken, token)
  }

  get user (): IUser {
    return this.read<any>(this.getters.user)
  }

  get token (): IToken {
    return this.read<any>(this.getters.token)
  }

  updateUser (user: IUser, password: string) {
    const userWithPassword: object = user
    // @ts-ignore
    userWithPassword.password = password
    const response = axios().put('users', userWithPassword)
    this.commit(this.mutations.setUser, user)
    return response
  }

  setUser (user: IUser) {
    this.commit(this.mutations.setUser, user)
  }

  changePassword (password: IChangePassword) {
    return axios().patch('/users/password', password)
  }

  deleteUser () {
    this.commit(this.mutations.setUser, null)
    return axios().delete('users')
  }

  register (userRegistration:any) {
    return axios().post('auth/register', userRegistration)
  }

  logout () {
    this.commit(this.mutations.setUser, null)
    this.commit(this.mutations.setToken, null)
  }

  generateSponsorCode (sponsorCode: string) {
    return axios().patch('users/sponsor', { sponsorCode })
  }

  patchUser (option: object) {
    this.commit(this.mutations.updateUser, option)
  }

  setBearer (bearer: string) {
    this.commit(this.mutations.setToken, { accessToken: bearer, refreshToken: this.user.refreshToken })
  }
}
export default new AuthStore()
