<template>
  <div>
    <ButtonLogOut />
  </div>
</template>

<script>
import ButtonLogOut from '~/components/Buttons/ButtonLogOut.vue'

export default {
  components: { ButtonLogOut },

  mounted () {
    this.logout()
  },

  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>
