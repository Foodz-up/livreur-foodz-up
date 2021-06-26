import { IUser } from '~/store/interfaces/user'

export class User implements IUser {
  constructor () {
    this.id = 0
    this.email = ''
    this.cityCode = 62000
    this.firstName = ''
    this.lastName = ''
    this.profilePicture = ''
    this.refreshToken = ''
    this.refreshTokenExpires = ''
    this.role = 0
    this.sponsorCode = ''
  }

    cityCode: number
    firstName: string
    lastName: string
    profilePicture: string
    refreshToken: string
    refreshTokenExpires: string
    role: number
    sponsorCode: string
    id: number
    email: string
}
