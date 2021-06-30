import BaseStoreService from '../abstract'
import { IUser } from '../interfaces'
import { EOrderState, IOrder } from '../interfaces/order'
import { OrderStoreModule } from './module'
import { OrderState } from './state'

class OrderStore extends BaseStoreService<OrderState> {
    public mutations = OrderStoreModule.mutations
    public getters = OrderStoreModule.getters

    get orders (): Array<IOrder> {
      return this.read<any>(this.getters.orders)
    }

    getOrder (idOrder: number): IOrder | undefined {
      return this.orders.find(order => order.id === idOrder)
    }

    getOrders (): Array<IOrder> | undefined {
      return this.orders
    }

    setOrders (orders: Array<IOrder>) {
      this.commit(this.mutations.setOrders, orders)
    }

    addOrder (order: IOrder) {
      this.commit(this.mutations.addOrder, order)
    }

    updateOrder (orderId: number, status: EOrderState, driver: IUser | undefined) {
      this.commit(this.mutations.updateOrder, { orderId, status, driver })
    }
}
export default new OrderStore()
