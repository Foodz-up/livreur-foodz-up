import { IUser } from '~/store/interfaces/user'

export class Contact implements IUser {
  constructor () {
    this.id = 0
    this.email = ''
  }

    id: number
    email: string
}
