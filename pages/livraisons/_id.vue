<template>
  <div>
    <LoadStatusOrder :key="updateComponent" :status="status" class="mb-8" @changeStatus="changeStatus" />
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col align-start p-6 bg-gray-50">
        <h1 class="text-2xl border-b-2 pb-5 border-black">
          {{ storeOrder.restaurant.name }} ({{ storeOrder._id }})
        </h1>
        <p class="text-sm font-thin mb-5">
          Commandé le {{ dateFormat(storeOrder.date) }}
        </p>
        <div class="mb-5">
          <h2 class="text-xl pb-3">
            Adresse
          </h2>
          <p class="font-thin text-sm">
            <span class="font-medium">Position commande :</span> {{ storeOrder.restaurant.address }}
          </p>
          <p class="font-thin text-sm">
            <span class="font-medium">Livrer au :</span> {{ storeOrder.client.address }}
          </p>
        </div>
        <h2 class="text-xl pb-3">
          Elements de rémunération
        </h2>
        <div class="grid gap-4 grid-cols-1">
          <div class="grid gap-5 grid-cols-2">
            <p class="text-sm">
              Distance à parcourir
            </p>
            <p class="text-sm font-thin">
              {{ storeOrder.distance }}km
            </p>
          </div>
          <div class="pt-2 grid gap-5 grid-cols-2 border-t-2">
            <p class="text-sm">
              Total rémunération
            </p>
            <p class="text-sm font-thin">
              {{ paimentPrice }}€
            </p>
          </div>
        </div>
      </div>
      <!-- <GMap
        ref="gMap"
        class="self-stretch h-full w-full"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="6"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
              lat: {{ location.lat }},
              lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions" />
      </GMap> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { EOrderState, IOrder } from '~/store/interfaces/order'
import OrderStore from '~/store/order'
import LoadStatusOrder from '~/components/Others/LoadStatusOrder.vue'

@Component({
  components: { LoadStatusOrder }
})
export default class Delivery extends Vue {
  get storeOrder ():IOrder | undefined {
    return OrderStore.getOrderMe(this.$router.currentRoute.params.id)
  }

  get paimentPrice () {
    return (this.storeOrder.price / 19 + 0.001 * this.storeOrder.price * this.storeOrder.distance).toFixed(2)
  }

  updateComponent: number = 0
  totalRemuneration: number = 5
  status:string = this.storeOrder.status

  currentLocation: {} = {}
  circleOptions: {} = {}
  locations: Array<{ lat: number, lng: number}> = [
    {
      lat: 50.283333,
      lng: 2.783333
    },
    {
      lat: 45.815,
      lng: 15.9819
    },
    {
      lat: 45.12,
      lng: 16.21
    }
  ]

  pins: { selected: string, notSelected: string } = {
    selected: 'data:image/png;base64,iVBORw0KGgo...',
    notSelected: 'data:image/png;base64,iVBORw0KGgo...'
  }

  mapStyle: [] = []

  clusterStyle: Array<{ url: string, width: number, height: number, textColor: string }> = [
    {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
      width: 56,
      height: 56,
      textColor: '#fff'
    }
  ]

  dateFormat (dateString: number): string {
    const date = new Date(dateString)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    // @ts-ignore
    return date.toLocaleDateString('fr', options)
  }

  async changeStatus (status: EOrderState) {
    const changedOrder = await OrderStore.updateOrderMeStatus(this.storeOrder._id, status)
    this.updateComponent += 1
    this.status = changedOrder.status
  }
}
</script>

<style scoped>

</style>
