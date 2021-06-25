<template>
  <div>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 p-4">
      <CardCommande
        v-for="commande in commandes"
        :id="commande.id"
        :key="commande.id"
        :distance="commande.distance"
        :address="commande.address"
        :restaurant="commande.restaurant"
        :price="commande.price"
        @clicked="modalOpen = true"
      />
    </div>

    <Modal :class="{'hidden': !modalOpen}" @save="selectCommande(key)" @cancel="toggleModal()">
      Acceptez-vous de prendre en charge cette commande ?
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardCommande from '~/components/Cards/CardCommande.vue'
import Modal from '~/components/Others/Modal.vue'
@Component({
  components: { CardCommande, Modal }
})
export default class Home extends Vue {
  commandes = [
    { id: 1, restaurant: 'McDonalds', price: 35.99, distance: '6km', address: { cityCode: '62000', city: 'Arras', address: '12 rue du cimetière' } },
    { id: 2, restaurant: 'Buffalo Grill', price: 36.99, distance: '12km', address: { cityCode: '62000', city: 'Arras', address: '456 bis résidence Les Chiottes' } },
    { id: 3, restaurant: 'Burger King', price: 21.99, distance: '2km', address: { cityCode: '62000', city: 'Arras', address: '36 rue du chef kebabier' } },
    { id: 4, restaurant: 'Ch\'ti Charivari', price: 15.99, distance: '600m', address: { cityCode: '62000', city: 'Arras', address: '20 rue du colonnel Moutarde' } },
    { id: 5, restaurant: 'L\'assiette aux boeufs', price: 56.00, distance: '950m', address: { cityCode: '62000', city: 'Arras', address: '125 avenue du maréchal Vinrouge' } }
  ]

  modalOpen = false

  selectCommande (id: number) {
    alert(id)
  }

  toggleModal () {
    this.modalOpen = !this.modalOpen
  }
}
</script>

<style scoped>

</style>
