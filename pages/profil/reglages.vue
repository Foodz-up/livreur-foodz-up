<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Informations du compte
    </h1>
    <hr class="mt-4 mb-12">

    <div class="flex flex-col md:flex-row justify-evenly">
      <FormUpdateUser :user="user" />
      <hr class="my-12 border-2 md:hidden">
      <FormPasswordChange :password="password" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FormUpdateUser from '~/components/Forms/FormUpdateUser.vue'
import FormPasswordChange from '~/components/Forms/FormPasswordChange.vue'

@Component({
  components: { FormUpdateUser, FormPasswordChange }
})
export default class ProfileSetting extends Vue {
  user: { name: string, surname: string, email: string, countryCode: string } = {
    name: 'Thomas', surname: 'CLEMENT', email: 'thomas.clement@viacesi.fr', countryCode: '62000'
  }

  password: { oldPassword: string, newPassword: string, confirmPassword: string } = {
    oldPassword: '', newPassword: '', confirmPassword: ''
  };
}
</script>

<style scoped>

</style>
