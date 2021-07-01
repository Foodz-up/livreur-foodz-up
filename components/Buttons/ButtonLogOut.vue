<template>
  <button class="w-auto cursor-pointer text-red-pastel hover:underline font-medium" @click="logout()">
    Se déconnecter
  </button>
</template>

<script>
import AuthStore from '~/store/auth'
import NotificationStore from '~/store/notification'
import OrderStore from '~/store/order'

export default {
  methods: {
    async logout () {
      await this.$auth.logout()
      AuthStore.logout()
      OrderStore.setOrders([])
      OrderStore.setOrdersMe([])
      this.$router.push('/auth/connexion')
      NotificationStore.addNotification({
        message: 'Vous êtes maintenant déconnecté',
        status: 200
      })
    }

  }
}
</script>

<style scoped>

</style>
