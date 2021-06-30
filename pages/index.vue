<template>
  <div>
    <div v-if="!orders" class="text-center">
      <h1 class="font-thin text-xl sm:text-4xl">
        Aucune commande a été enregistrée
      </h1>
    </div>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 p-4">
      <CardCommande
        v-for="commande in orders"
        :id="commande.id"
        :key="commande.id"
        :distance="commande.distance"
        :address="10"
        :restaurant="commande.restaurant"
        :price="commande.price"
        @clicked="cardClick(commande.id)"
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
  allOrders: Array<IOrder> | undefined = OrderStore.getOrders()
  orders = this.allOrders?.find(order => order.status === EOrderState.ORDERED)

  modalOpen = false
  selectedKey!: number

  cardClick (key: number) {
    this.modalOpen = true
    this.selectedKey = key
  }

  selectCommande (id: number) {
    if (this.allOrders) {
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
