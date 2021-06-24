<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Parrainage
    </h1>

    <hr class="mt-4 mb-12">

    <div class="flex items-center">
      <button class="mr-2" @click="generateSponsorCode()">
        <DynamicSvg :component-name="'loop'" width="18" />
      </button>
      <span>Regénérer un code</span>
    </div>
    <InputFoodzUp
      v-model="code"
      class="mt-4 w-44"
      :value="code"
      :input-variable="'code'"
      :placeholder="'Ex: ••••••••'"
      :disabled="true"
      :width="20"
    />
    <div class="flex items-center ml-4 mt-2">
      <button class="flex flex-col items-center mr-2" @click="toggleModal()">
        <DynamicSvg :component-name="'share'" width="18" class="mr-2 text-blue-500" />
        <span>Partager</span>
      </button>
      <button
        v-clipboard:copy="code"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="flex flex-col items-center ml-2"
      >
        <DynamicSvg :component-name="'copy'" width="18" class="mr-2 text-yellow-500" />
        <span>Copier</span>
      </button>
    </div>
    <Modal :class="{'hidden': !modal}" :only-cancel="true" @cancel="toggleModal()">
      <ShareNetwork
      class="flex items-center mb-2"
        v-for="(network, index) in networklist"
        :key="index"
        :network="network.name"
        :url="`http://www.cesi.fr/?code=${code}`"
        title="Foodz'Up en ligne !"
        description="Notre projet de livreur de repas 'FoodzUp' est en ligne !"
        quote="Notre projet de livreur de repas 'FoodzUp' est en ligne !"
        hashtags="FoodzUp"
      >
        <img width="30" class="mr-2" :src="network.url">
        <span>
          Partager avec {{ network.name }}
        </span>
      </ShareNetwork>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VueClipboard from 'vue-clipboard2'
import VueSocialSharing from 'vue-social-sharing'
import DynamicSvg from '~/components/Svg/DynamicSvg.vue'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'
import Modal from '~/components/Others/Modal.vue'

Vue.use(VueSocialSharing)
Vue.use(VueClipboard)

@Component({
  components: { DynamicSvg, InputFoodzUp, Modal }
})
export default class ProfileSponsor extends Vue {
  code: string = 'Dx-Fds98-c'
  modal: boolean = false
  networklist: Array<{name: string, url:string}> = [
    { name: 'Facebook', url: 'http://logo.clearbit.com/facebook.com' },
    { name: 'Email', url: 'http://logo.clearbit.com/gmail.com' },
    { name: 'Linkedin', url: 'http://logo.clearbit.com/linkedin.com' },
    { name: 'Telegram', url: 'http://logo.clearbit.com/telegram.com' },
    { name: 'Whatsapp', url: 'http://logo.clearbit.com/whatsapp.com' }
  ]

  toggleModal () {
    this.modal = !this.modal
  }

  shareSponsorCode () {
    this.$router.push({ path: this.$route.path, query: { code: this.code } })
  }

  onCopy (e:any) {
    alert('Copie réussi, vous pouvez maintenant le coller : ' + e.text)
  }

  onError () {
    alert('La copie a rencontré un problème')
  }

  generateSponsorCode () {
    const caracToUse = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-+!*ù$'
    this.code = Array(10).fill(caracToUse).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('')

    // TODO: store that new code in database
  }
}
</script>

<style scoped>

</style>
