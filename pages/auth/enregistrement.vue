<template>
  <div class="auth-container sm:bg-red-pastel h-screen w-screen sm:flex justify-center items-center flex-none">
    <FormRegistration />
  </div>
</template>

<script lang="ts">
import FormRegistration from '~/components/Forms/FormRegistration.vue'

export default {
  auth: false,
  components: {
    FormRegistration
  },
  layout: 'noSidebar',
  data () {
    return {
      data: {
        email: '',
        password: {
          password: '',
          confirmation: ''
        },
        error: ''
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
