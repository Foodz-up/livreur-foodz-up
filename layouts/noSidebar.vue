<template>
  <div>
    <Nuxt class="my-10 mx-4 custom-layout-height" />
    <ListNotifications class="fixed bottom-0 right-0 z-40" />
  </div>
</template>

<script>
import ListNotifications from '~/components/Lists/ListNotifications.vue'
import AuthStore from '~/store/auth'

export default {
  components: { ListNotifications },
  mounted () {
    if (this.$auth.$state['access_token.local']) {
      AuthStore.setBearer(this.$auth.$state['access_token.local'].split('Bearer ')[1])
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

<style>

html {
  font-family:
  'Montserrat',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.max-w-300px {
  max-width: 300px;
}

*, button {
  outline: none!important;
}
</style>
