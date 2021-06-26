<template>
  <button class="w-auto cursor-pointer text-red-pastel hover:underline font-medium" @click="logout()">
    Se déconnecter
  </button>
</template>

<script>
import AuthStore from '~/store/auth'

export default {
  methods: {
    async logout () {
      await this.$auth.logout()
      AuthStore.logout()
      this.$router.push('/auth/connexion')
    }
  }
}
</script>

<style scoped>

</style>
