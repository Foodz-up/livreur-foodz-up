<template>
  <div class="auth-container sm:bg-white h-screen w-screen sm:flex justify-center items-center flex-none">
    <FormForgotPassword />
  </div>
</template>

<script>
import FormForgotPassword from '~/components/Forms/FormForgotPassword.vue'

export default {
  auth: false,
  components: {
    FormForgotPassword
  },
  layout: 'noSidebar'
}
</script>
