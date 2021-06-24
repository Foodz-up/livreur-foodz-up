<template>
  <div class="m-4">
    <div class="flex items-center">
      <SvgProfile width="40" class="mr-3" />
      <span class="mt-1">
        Charles MOREL
      </span>
    </div>

    <hr class="mt-4">

    <div class="grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-4">
      <CardNavigation
        v-for="(item, index) in items"
        :key="index"
        :description="item.description"
        :title="item.title"
        :icon="item.icon"
        :route="item.route"
        class="pl-4"
      />
    </div>

    <div class="mt-7">
      <nuxt-link class="text-gray-500 hover:underline w-full mr-2" to="/about">
        A propos de FoodzUp
      </nuxt-link>

      <button class="w-auto cursor-pointer text-red-pastel hover:underline font-medium" @click="logout()">
        Se déconnecter
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SvgProfile from '~/components/Svg/SvgProfile.vue'
import SvgBurger from '~/components/Svg/SvgBurger.vue'
import CardNavigation from '~/components/Cards/CardNavigation.vue'

@Component({
  components: { SvgProfile, CardNavigation, SvgBurger }
})
export default class Profile extends Vue {
  // TODO: need type (description not required)
  items: Array<{ icon: string, route: string, title: string, description: string }> = [
    { icon: 'covid', route: '/profil/covid', title: 'Covid-19', description: '' },
    { icon: 'card', route: '/profil/paiement', title: 'Informations bancaires', description: 'Editez vos informations bancaires' },
    { icon: 'sponsor', route: '/profil/parrainage', title: 'Pairrainage', description: 'Récuperz votre code parainage' },
    { icon: 'help', route: '/profil/Aide', title: 'Aide', description: '' },
    { icon: 'setting', route: '/profil/reglages', title: 'Informations du compte', description: '' }
  ]

  // TODO: logout function
  logout () {}
}
</script>

<style scoped>

</style>
