<template>
  <div class="auth-container bg-red-pastel h-screen w-screen flex justify-center items-center">
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
