import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { AuthStoreModule } from '~/store/auth/module'
import { NotificationStoreModule } from '~/store/notification/module'
import { RootState } from '~/store/root'

Vue.use(Vuex)

const store: Store<RootState> = new Vuex.Store<RootState>({
  state: () => ({}),
  mutations: {},
  getters: {},
  actions: {
    nuxtServerInit () {},
    async nuxtClientInit () {}
  },
  modules: {
    auth: AuthStoreModule,
    notification: NotificationStoreModule
  }
})
export default function () {
  return store
}
