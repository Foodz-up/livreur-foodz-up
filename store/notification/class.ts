import { INotification } from '~/store/interfaces'

export class Notification implements INotification {
  constructor () {
    this.status = 0
    this.message = ''
  }

  message: string
  status: number
}
