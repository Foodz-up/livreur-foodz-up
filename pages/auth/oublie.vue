<template>
  <div class="auth-container sm:bg-white h-screen w-screen sm:flex justify-center items-center flex-none">
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
  background: url('~/assets/img/background.jpg') center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 640px) {
  .auth-container {
    background: white;
  }
}
</style>
