<template>
  <div>
    <div v-if="!storeOrders" class="text-center">
      <h1 class="font-thin text-xl sm:text-4xl">
        Aucune commande a été enregistrée
      </h1>
    </div>
    <div v-else class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 p-4">
      <CardCommande
        v-for="commande in storeOrders"
        :key="commande._id"
        :_id="commande._id"
        :distance="10"
        :address-out="commande.client.address"
        :address-in="commande.restaurant.address"
        :restaurant="commande.restaurant"
        :client="commande.client.address"
        :price="commande.price"
        @clicked="cardClick(commande._id)"
      />
    </div>

    <Modal :class="{'hidden': !modalOpen}" @save="selectCommande(selectedKey)" @cancel="toggleModal()">
      Acceptez-vous de prendre en charge cette commande ?
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardCommande from '~/components/Cards/CardCommande.vue'
import Modal from '~/components/Others/Modal.vue'
import { EOrderState, IOrder } from '~/store/interfaces/order'
import OrderStore from '~/store/order'
import AuthStore from '~/store/auth'

@Component({
  components: { CardCommande, Modal }
})
export default class Home extends Vue {
  get storeOrders ():Array<IOrder> {
    return OrderStore.orders
  }

  modalOpen = false
  selectedKey!: string

  cardClick (key: string) {
    this.modalOpen = true
    this.selectedKey = key
  }

  mounted () {
    if (!(OrderStore.orders.length > 0)) {
      OrderStore.getOrders()
    }
  }

  selectCommande (id: string) {
    if (this.storeOrders) {
      OrderStore.updateOrder(id, EOrderState.ORDER_IN_PROGRESS, AuthStore.user)
      this.$router.push('/livraisons/' + id)
    }
  }

  toggleModal () {
    this.modalOpen = !this.modalOpen
  }
}
</script>

<style scoped>

</style>
