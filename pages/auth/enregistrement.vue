<template>
  <div class="auth-container sm:bg-white h-screen w-screen sm:flex justify-center items-center flex-none">
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
