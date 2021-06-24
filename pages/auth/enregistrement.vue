<template>
  <div class="auth-container bg-red-pastel h-screen w-screen flex justify-center items-center">
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
