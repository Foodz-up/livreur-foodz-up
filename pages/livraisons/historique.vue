<template>
  <div>
    <h1 class="text-4xl mb-5">
      Commandes en cours
    </h1>
    <div class="grid grid-cols-1">
      <div v-for="order in currentOrders" :key="order.id" class="grid grid-cols-4 bg-gray-50 p-5 border-b-2">
        <p>{{ order.reference }}</p>
        <p class="font-thin">
          {{ order.restaurant }}
        </p>
        <p class="font-thin">
          {{ order.distance }}
        </p>
        <p class="font-thin">
          {{ parseFloat(order.price*0.1 + order.distance).toFixed(2) }}€
        </p>
      </div>
    </div>
    <h1 class="text-4xl mb-5 mt-5">
      Commandes passées
    </h1>
    <div class="grid grid-cols-1">
      <div v-for="order in passedOrders" :key="order.id" class="grid grid-cols-4 bg-gray-50 p-5 border-b-2">
        <p>{{ order.reference }}</p>
        <p class="font-thin">
          {{ order.restaurant }}
        </p>
        <p class="font-thin">
          {{ order.distance }}
        </p>
        <p class="font-thin">
          {{ parseFloat(order.price*0.1 + order.distance).toFixed(2) }}€
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
})
export default class Historique extends Vue {
  currentOrders = [
    { id: 5, reference: 'REF620003', restaurant: 'L\'assiette aux boeufs', price: 56.00, distance: '950m', address: { cityCode: '62000', city: 'Arras', address: '125 avenue du maréchal Vinrouge' } }
  ]

  passedOrders = [
    { id: 1, reference: 'REF620001', restaurant: 'McDonalds', price: 35.99, distance: '6km', address: { cityCode: '62000', city: 'Arras', address: '12 rue du cimetière' } },
    { id: 2, reference: 'REF620002', restaurant: 'Buffalo Grill', price: 36.99, distance: '12km', address: { cityCode: '62000', city: 'Arras', address: '456 bis résidence Les Chiottes' } },
    { id: 3, reference: 'REF620004', restaurant: 'Burger King', price: 21.99, distance: '2km', address: { cityCode: '62000', city: 'Arras', address: '36 rue du chef kebabier' } },
    { id: 4, reference: 'REF620006', restaurant: 'Ch\'ti Charivari', price: 15.99, distance: '600m', address: { cityCode: '62000', city: 'Arras', address: '20 rue du colonnel Moutarde' } }
  ]
}
</script>

<style scoped>

</style>
