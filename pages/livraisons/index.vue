<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex flex-col align-start p-6 bg-gray-50">
      <h1 class="text-2xl border-b-2 pb-5 border-black">
        {{ commande.restaurant }} ({{ commande.reference }})
      </h1>
      <p class="text-sm font-thin mb-5">
        Commandé à {{ commande.date.toUTCString() }}
      </p>
      <div class="mb-5">
        <h2 class="text-xl pb-3">
          Adresse
        </h2>
        <p class="text-sm font-thin">
          {{ commande.address.cityCode }} {{ commande.address.city }}
        </p>
        <p class="text-sm font-thin">
          {{ commande.address.address }}
        </p>
      </div>
      <h2 class="text-xl pb-3">
        Rémunération
      </h2>
      <div class="grid gap-4 grid-cols-1">
        <div class="grid gap-5 grid-cols-2">
          <p class="text-sm">
            Distance à parcourir
          </p>
          <p class="text-sm font-thin">
            {{ commande.distance }}km
          </p>
        </div>
        <div class="grid gap-5 grid-cols-2">
          <p class="text-sm">
            Part sur la commande
          </p>
          <p class="text-sm font-thin">
            {{ parseFloat(commande.price*0.1).toFixed(2) }}€
          </p>
        </div>
        <div class="grid gap-5 grid-cols-2 border-t-2">
          <p class="text-sm">
            Total rémunération
          </p>
          <p class="text-sm font-thin">
            {{ parseFloat(commande.price*0.1 + commande.distance).toFixed(2) }}€
          </p>
        </div>
      </div>
    </div>
    <div>
      <GMap
        ref="gMap"
        class="mt-12"
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
      </GMap>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Livraisons extends Vue {
  commande: object = { id: 3, date: new Date(Date.now()), restaurant: 'Burger King', reference: 'REF6220003', price: 21.99, distance: 6, address: { cityCode: '62000', city: 'Arras', address: '36 rue du chef kebabier' } }

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
}
</script>

<style scoped>

</style>
