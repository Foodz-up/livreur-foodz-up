import { IUser } from '../interfaces'
import { OrderState } from '~/store/order/state'
import { IOrder, EOrderState } from '~/store/interfaces/order'

export const OrderStoreModule = {
  namespaced: false,
  state: () => ({ ...new OrderState() }),
  getters: {
    orders (state: OrderState): Array<IOrder> {
      return state.orders
    }
  },
  mutations: {
    setOrders (state: OrderState, orders: Array<IOrder>) {
      state.orders = orders
    },

    addOrder (state: OrderState, order: IOrder) {
      state.orders = [...state.orders, order]
    },
    updateOrder (state: OrderState, payload:{orderId: number, status: EOrderState, driver: IUser|undefined}) {
      const orderSelected = state.orders.findIndex(order => order.id === payload.orderId)
      state.orders[orderSelected].status = payload.status
      if (payload.driver) {
        state.orders[orderSelected].driver = payload.driver
      }
    }
  }
}
