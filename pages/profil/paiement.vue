<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Cartes
    </h1>

    <hr class="mt-4 mb-12">

    <h2 class="text-2xl mb-4 text-yellow-pastel font-medium">
      Carte(s) bancaire(s)
    </h2>

    <div v-if="formCard.cardNumber" class="cursor-pointer flex items-center p-4 hover:bg-gray-100" @click="toggleModal()">
      <SvgMasterCard width="75" height="50" class="bg-gray-900 px-3" />
      <span class="ml-4 text-2xl font-medium"><span class="text-3xl font-medium">•••• </span>{{ cardEndNumber }}</span>
      <SvgEdit width="45" class="ml-auto px-3 text-gray-700" />
    </div>

    <button v-if="!formCard.cardNumber" class="mt-4 text-left text-gray-500 hover:underline w-full mr-2 text-primary font-medium" to="/about">
      Ajouter un moyen de paiment
    </button>

    <Modal :class="{'hidden': !modal}" @remove="deleteCard()" @save="saveCard()" @cancel="toggleModal()">
      <FormCard :form-card="formCard" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SvgMasterCard from '~/components/Svg/SvgMasterCard.vue'
import SvgEdit from '~/components/Svg/SvgEdit.vue'
import Modal from '~/components/Others/Modal.vue'
import FormCard from '~/components/Forms/FormCard.vue'

@Component({
  components: { SvgEdit, SvgMasterCard, Modal, FormCard }
})
export default class ProfileCard extends Vue {
  modal:boolean = false

  formCard: {cardNumber: string, expDate: string, cvv: string} = {
    cardNumber: '1532 1254 1253 3678', expDate: '', cvv: ''
  }

  get cardEndNumber () {
    return this.formCard.cardNumber.split(' ').pop()
  }

  toggleModal () {
    this.modal = !this.modal
  }

  // TODO: need type (description not required)
  items: Array<{ icon: string, route: string, title: string, description: string }> = [
    { icon: 'covid', route: '/profil/covid-19', title: 'Covid-19', description: '' },
    { icon: 'card', route: '/profil/cartes', title: 'Cartes bancaire', description: 'Editer vos moyens de paiement' },
    { icon: 'favourite', route: '/profil/favoris', title: 'Vos favoris', description: '' },
    { icon: 'sponsor', route: '/profil/parainage', title: 'Pairainage', description: 'Récuperz votre code parainage' },
    { icon: 'help', route: '/profil/Aide', title: 'Aide', description: '' },
    { icon: 'promote', route: '/profil/promotion', title: 'Promotion', description: 'Récuperz des coupon de réduction' },
    { icon: 'deliver', route: '/profil/livreur', title: 'Devenez livreur', description: 'Inscivez-vous en quelques minutes' },
    { icon: 'setting', route: '/profil/reglage', title: 'Réglage', description: '' }
  ]

  // TODO: logout function
  logout () {}

  // TODO: saveCard function
  saveCard () {
    console.log({ formCard: this.formCard })
  }

  // TODO: deleteCard function
  deleteCard () {

  }
}
</script>

<style scoped>

</style>
