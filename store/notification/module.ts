import { NotificationState } from '~/store/notification/state'
import { INotification } from '~/store/interfaces'

export const NotificationStoreModule = {
  namespaced: false,
  state: () => ({ ...new NotificationState() }),
  getters: {
    notifications (state: NotificationState): Array<INotification> {
      return state.notifications
    }
  },
  mutations: {
    setNotifications (state: NotificationState, notifications: Array<INotification>) {
      state.notifications = notifications
    },
    addNotifications (state: NotificationState, notification: INotification) {
      state.notifications.push(notification)
    },
    removeNotifications (state: NotificationState) {
      setTimeout(function (this: any) {
        state.notifications.shift()
      }, 6000)
    }
  }
}
