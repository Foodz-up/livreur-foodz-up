<template>
  <div>
    <div v-if="statusIs('Commandée')" class="flex">
      <div class="bg-yellow-800 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4" />
    </div>
    <div v-if="statusIs('Commande en préparation')" class="flex">
      <div class="bg-yellow-800 h-6 w-1/4 mr-2" />
      <div class="bg-red-pastel h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4" />
    </div>
    <div v-if="statusIs('Commande préparée')" class="flex">
      <div class="bg-yellow-800 h-6 w-1/4 mr-2" />
      <div class="bg-red-pastel h-6 w-1/4 mr-2" />
      <div class="bg-yellow-pastel h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4" />
    </div>
    <div v-if="statusIs('En cours de livraison')" class="flex">
      <div class="bg-yellow-800 h-6 w-1/4 mr-2" />
      <div class="bg-red-pastel h-6 w-1/4 mr-2" />
      <div class="bg-yellow-pastel h-6 w-1/4 mr-2" />
      <div class="bg-blue-pastel h-6 w-1/4 mr-2" />
      <div class="bg-gray-200 h-6 w-1/4" />
    </div>
    <div v-if="statusIs('Livrée')" class="flex">
      <div class="bg-yellow-800 h-6 w-1/4 mr-2" />
      <div class="bg-red-pastel h-6 w-1/4 mr-2" />
      <div class="bg-yellow-pastel h-6 w-1/4 mr-2" />
      <div class="bg-blue-pastel h-6 w-1/4 mr-2" />
      <div class="bg-primary h-6 w-1/4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class LoadStatusOrder extends Vue {
    @Prop({ required: true })
    status!: 'Commandée' | 'Commande en préparation' | 'Commande préparée' | 'En cours de livraison' | 'Livrée'

    statusIs (status:string) {
      return this.status === status
    }
}
</script>

<style scoped>

</style>
