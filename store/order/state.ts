import { IOrder } from '~/store/interfaces/order'

export class OrderState {
  orders: Array<IOrder> = []
  ordersMe: Array<IOrder> = []
}
