import BaseStoreService from '../abstract'
import { IUser } from '../interfaces'
import { EOrderState, IOrder } from '../interfaces/order'
import { OrderStoreModule } from './module'
import { OrderState } from './state'
import axios from '~/plugins/axios'
import AuthStore from '~/store/auth'
import NotificationStore from '~/store/notification'
class OrderStore extends BaseStoreService<OrderState> {
  public mutations = OrderStoreModule.mutations
  public getters = OrderStoreModule.getters

  get orders (): Array<IOrder> {
    return this.read<Array<IOrder>>(this.getters.orders)
  }

  get ordersMe (): Array<IOrder> {
    return this.read<Array<IOrder>>(this.getters.ordersMe)
  }

  getOrder (idOrder: string): IOrder | undefined {
    return this.orders.find(order => order._id === idOrder)
  }

  getOrderMe (idOrderMe: string): IOrder | undefined {
    return this.ordersMe.find(order => order._id === idOrderMe)
  }

  async getOrders () {
    try {
      const orders = await axios().get('orders/driver')
      if (orders.status === 200 && orders.data.orders.length > 0) {
        this.addOrders(orders.data.orders)
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async getOrdersMe () {
    try {
      const orders = await axios().get('orders/me/driver')
      if (orders.status === 200 && orders.data.orders.length > 0) {
        this.addOrdersMe(orders.data.orders)
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  addOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.addOrders, orders)
  }

  addOrdersMe (ordersMe: Array<IOrder>) {
    this.commit(this.mutations.addOrdersMe, ordersMe)
  }

  setOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.setOrders, orders)
  }

  setOrdersMe (ordersMe: Array<IOrder>) {
    this.commit(this.mutations.setOrdersMe, ordersMe)
  }

  addOrder (order: IOrder) {
    this.commit(this.mutations.addOrder, order)
  }

  removeOrder (orderId: number) {
    this.commit(this.mutations.removeOrder, orderId)
  }

  addOrderMe (orderMe: IOrder) {
    this.commit(this.mutations.addOrderMe, orderMe)
  }

  async updateOrder (orderId: string, status: EOrderState, driver: IUser | undefined) {
    try {
      const order = await axios().patch('orders/update', { orderId, status, driver })

      if (order.status === 200) {
        this.removeOrder(order.data.order._id)
        this.addOrderMe(order.data.order)
        NotificationStore.addNotification({ message: order.data.message, status: order.status })
        console.log({ store: this.orderMe })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async updateOrderMeStatus (orderId: string, status: EOrderState): Promise<IOrder | undefined> {
    try {
      const order = await axios().patch('orders/update', { orderId, status, driver: AuthStore.user })

      if (order.status === 200) {
        this.commit(this.mutations.updateOrderMe, order.data.order)

        NotificationStore.addNotification({ message: order.data.message, status: order.status })
        return order.data.order
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }
}
export default new OrderStore()
