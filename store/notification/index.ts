// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { NotificationStoreModule } from '~/store/notification/module'
import { NotificationState } from '~/store/notification/state'
import { INotification } from '~/store/interfaces/'

class NotificationStore extends BaseStoreService<NotificationState> {
  public mutations = NotificationStoreModule.mutations
  public getters = NotificationStoreModule.getters

  get notifications (): Array<INotification> {
    return this.read<any>(this.getters.notifications)
  }

  addNotification (notification: INotification) {
    this.commit(this.mutations.addNotifications, notification)
    this.commit(this.mutations.removeNotifications, notification)
  }
}
export default new NotificationStore()
