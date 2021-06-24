<template>
  <div class="auth-container sm:bg-red-pastel w-screen sm:flex justify-center items-center flex-none">
    <FormForgotPassword />
  </div>
</template>

<script lang="ts">
import FormForgotPassword from '~/components/Forms/FormForgotPassword.vue'

export default {
  auth: false,
  components: {
    FormForgotPassword
  },
  layout: 'noSidebar',
  data () {
    return {
      data: {
        email: ''
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  margin: 0px;
}
</style>
