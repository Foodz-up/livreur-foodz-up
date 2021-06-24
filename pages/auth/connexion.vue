<template>
  <div class="auth-container bg-red-pastel h-screen w-screen flex justify-center items-center">
    <FormAuthentication />
  </div>
</template>

<script lang="ts">
import FormAuthentication from '~/components/Forms/FormAuthentication.vue'

export default {
  auth: false,
  components: {
    FormAuthentication
  },
  layout: 'noSidebar',
  data () {
    return {
      data: {
        email: '',
        password: '',
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
