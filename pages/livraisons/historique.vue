<template>
  <div>
    <div v-if="storeOrdersMe">
      <div v-for="(orderArrayByStatus, index) in splitedByStatus" :key="index" class="w-full mb-4">
        <h1 class="text-4xl mb-5">
          {{ orderArrayByStatus[0].status }}
        </h1>
        <div v-if="storeOrdersMe" class="grid grid-cols-1">
          <nuxt-link v-for="order in orderArrayByStatus" :key="order._id" :to="`/livraisons/${order._id}`" class="grid grid-cols-3 gap-5 text-center bg-gray-50 p-5 border-b-2">
            <p class="font-thin my-auto">
              {{ order.restaurant.name }}
            </p>
            <p class="font-thin my-auto">
              {{ order.distance }} km
            </p>
            <p class="font-thin my-auto">
              {{ paimentPrice(order) }} €
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-4xl mb-5">
        Vous n'avez pas de commandes en cours
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IOrder } from '~/store/interfaces/order'
import OrderStore from '~/store/order'

@Component({
})
export default class Historique extends Vue {
  get storeOrdersMe ():Array<IOrder> {
    return OrderStore.ordersMe
  }

  paimentPrice (order: IOrder) {
    if (!order.distance) {
      return (order.price / 19 + 0.001 * order.price).toFixed(2)
    }
    return (order.price / 19 + 0.001 * order.price * order.distance).toFixed(2)
  }

  get splitedByStatus () {
    const newObject = this.storeOrdersMe.reduce(function (obj, value) {
      const key = value.status
      // @ts-ignore
      if (obj[key] == null) { obj[key] = [] }

      // @ts-ignore
      obj[key].push(value)
      return obj
    }, {})

    return newObject
  }

  mounted () {
    if (OrderStore.ordersMe.length === 0) { OrderStore.getOrdersMe() }
  }
}
</script>

<style scoped>

</style>
