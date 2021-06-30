<template>
  <div class="text-center">
    <h1 class="font-thin text-xl sm:text-4xl">
      {{ message }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { EOrderState } from '~/store/interfaces/order'
import OrderStore from '~/store/order'

@Component({})
export default class Deliveries extends Vue {
  orders = OrderStore.getOrders()
  message: string = 'Chargement des données'
  mounted () {
    if (this.orders?.find(order => order.status !== EOrderState.PASSED && order.driver?.id === 1)) {
      this.$router.push('/')
    }
    this.message = 'Aucune livraison est en cours'
  }
}
</script>

<style scoped>

</style>
