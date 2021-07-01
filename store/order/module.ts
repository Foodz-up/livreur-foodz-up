import { IUser } from '../interfaces'
import { OrderState } from '~/store/order/state'
import { IOrder, EOrderState } from '~/store/interfaces/order'

export const OrderStoreModule = {
  namespaced: false,
  state: () => ({ ...new OrderState() }),
  getters: {
    orders (state: OrderState): Array<IOrder> {
      return state.orders
    },
    ordersMe (state: OrderState): Array<IOrder> {
      return state.ordersMe
    }
  },
  mutations: {
    setOrders (state: OrderState, orders: Array<IOrder>) {
      state.orders = orders
    },
    setOrdersMe (state: OrderState, ordersMe: Array<IOrder>) {
      state.ordersMe = ordersMe
    },
    setOrder (state: OrderState, orderUpdate: IOrder) {
      const orderSelected = state.orders.findIndex(order => order._id === orderUpdate._id)
      state.orders[orderSelected] = orderUpdate
    },
    addOrders (state: OrderState, orders: Array<IOrder>) {
      console.log({ ordersStore: orders })
      state.orders = [...state.orders, ...orders]
      console.log({ ordersStoreState: state.orders })
    },
    addOrdersMe (state: OrderState, ordersMe: Array<IOrder>) {
      state.ordersMe = [...state.ordersMe, ...ordersMe]
    },
    addOrder (state: OrderState, order: IOrder) {
      state.orders = [...state.orders, order]
    },
    removeOrder (state: OrderState, orderId: string) {
      const index = state.orders.findIndex(order => order._id === orderId)
      state.orders.splice(index, 1)
    },
    addOrderMe (state: OrderState, orderMe: IOrder) {
      state.ordersMe = [...state.ordersMe, orderMe]
    },
    updateOrder (state: OrderState, payload:{orderId: string, status: EOrderState, driver: IUser|undefined}) {
      const orderSelected = state.orders.findIndex(order => order._id === payload.orderId)
      state.orders[orderSelected].status = payload.status
      if (payload.driver) {
        state.orders[orderSelected].driver = payload.driver
      }
    },

    updateOrderMe (state: OrderState, orderMe: IOrder) {
      const orderSelected = state.ordersMe.findIndex(order => order._id === orderMe._id)
      state.ordersMe[orderSelected] = orderMe
    }
  }
}
