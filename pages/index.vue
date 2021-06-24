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
        @clicked="selectCommande(commande.id)"
      />
    </div>
    <!-- <Modal @save="" /> -->
  </div>
</template>

<script>
import CardCommande from '~/components/Cards/CardCommande.vue'

export default {
  auth: true,
  components: { CardCommande },
  data () {
    return {
      commandes: [
        { id: 1, restaurant: 'McDonalds', price: 35.99, distance: '6km', address: { cityCode: '62000', city: 'Arras', address: '12 rue du cimetière' } },
        { id: 2, restaurant: 'Buffalo Grill', price: 36.99, distance: '12km', address: { cityCode: '62000', city: 'Arras', address: '456 bis résidence Les Chiottes' } },
        { id: 3, restaurant: 'Burger King', price: 21.99, distance: '2km', address: { cityCode: '62000', city: 'Arras', address: '36 rue du chef kebabier' } },
        { id: 4, restaurant: 'Ch\'ti Charivari', price: 15.99, distance: '600m', address: { cityCode: '62000', city: 'Arras', address: '20 rue du colonnel Moutarde' } },
        { id: 5, restaurant: 'L\'assiette aux boeufs', price: 56.00, distance: '950m', address: { cityCode: '62000', city: 'Arras', address: '125 avenue du maréchal Vinrouge' } }
      ],
      modalOpen: false
    }
  },
  methods: {
    selectCommande (id) {
      alert(id)
    }
  }

}
</script>

<style scoped>

</style>
