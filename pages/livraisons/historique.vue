<template>
  <div>
    <h1 class="text-4xl mb-5">
      Commandes en cours
    </h1>
    <div class="grid grid-cols-1">
      <div v-for="order in currentOrders" :key="order.id" class="grid grid-cols-4 bg-gray-50 p-5 border-b-2">
        <p>{{ order.orderNumber }}</p>
        <p class="font-thin">
          {{ order.restaurant.name }}
        </p>
        <p class="font-thin">
          {{ Math.floor(Math.random() * 20) }}
        </p>
        <p class="font-thin">
          {{ parseFloat(order.price*0.1 + Math.floor(Math.random() * 20)).toFixed(2) }}€
        </p>
      </div>
    </div>
    <h1 class="text-4xl mb-5 mt-5">
      Commandes passées
    </h1>
    <div class="grid grid-cols-1">
      <div v-for="order in passedOrders" :key="order.id" class="grid grid-cols-4 bg-gray-50 p-5 border-b-2">
        <p>{{ order.orderNumber }}</p>
        <p class="font-thin">
          {{ order.restaurant }}
        </p>
        <p class="font-thin">
          {{ distance = Math.floor(Math.random() * 20) }}
        </p>
        <p class="font-thin">
          {{ parseFloat(order.price*0.1 + Math.floor(Math.random() * 20)).toFixed(2) }}€
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { EOrderState, IOrder } from '~/store/interfaces/order'
import OrderStore from '~/store/order'
import AuthStore from '~/store/auth'

@Component({
})
export default class Historique extends Vue {
  allOrders: Array<IOrder> | undefined = OrderStore.getOrders()
  currentOrders = this.allOrders?.find(order => order.status !== EOrderState.PASSED && order.driver?.id === AuthStore.user.id)
  passedOrders = this.allOrders?.find(order => order.status === EOrderState.PASSED && order.driver?.id === AuthStore.user.id)
}
</script>

<style scoped>

</style>
