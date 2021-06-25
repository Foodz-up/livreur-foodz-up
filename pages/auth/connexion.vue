<template>
  <div class="sm:bg-white auth-container h-screen w-screen sm:flex justify-center items-center flex-none">
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
