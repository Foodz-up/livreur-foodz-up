import { IUser } from '~/store/interfaces'
import { IRestaurant } from '~/store/interfaces/restaurant'

export enum EOrderState {
    ORDERED = 'Commandée',
    ORDER_IN_PROGRESS = 'Commande en préparation',
    ORDER_READY = 'Commande préparée',
    DELIVERING = 'En cours de livraison',
    DELIVERED = 'Livrée',
    PASSED = 'Passée'
}

export interface IOrder {
    id: number
    price: number
    status: EOrderState
    driver: IUser | null
    restaurant: IRestaurant
    client: IUser
    date: Date
}
