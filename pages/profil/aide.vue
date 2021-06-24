<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Aide
    </h1>

    <hr class="mt-4 mb-12">
    <div>
      <span>Pour toutes demandes veuillez contacter : </span>
      <a href="mailto:thomas.clement@viacesi.fr" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">thomas.clement@viacesi.fr</a>
    </div>
    <LoremFoodzUp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { }
})
export default class ProfileHelp extends Vue {

}
</script>

<style scoped>

</style>
