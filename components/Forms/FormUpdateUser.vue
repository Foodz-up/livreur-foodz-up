<template>
  <form @submit.prevent="updateUser()">
    <InputFoodzUp
      v-model="user.name"
      :value="user.name"
      :input-variable="'name'"
      :variable-description="'Prénom'"
      :icon="'profile'"
      :placeholder="'Ex: Thomas'"
    />
    <InputFoodzUp
      v-model="user.surname"
      class="mt-6"
      :value="user.surname"
      :input-variable="'surname'"
      :variable-description="'Nom'"
      :icon="'profile'"
      :placeholder="'Ex: CLEMENT'"
    />
    <InputFoodzUp
      v-model="user.email"
      class="mt-6"
      :value="user.email"
      :input-variable="'email'"
      :variable-description="'Email'"
      :icon="'envelope'"
      :placeholder="'Ex: thomas.clement@viacesi.fr'"
    />
    <InputFoodzUp
      v-model="user.countryCode"
      class="mt-6"
      :value="user.countryCode"
      :input-variable="'countryCode'"
      :variable-description="'Code Postal'"
      :icon="'number'"
      :placeholder="'Ex: 62000'"
    />
    <InputFoodzUp
      v-model="password"
      :value="password"
      :input-variable="'password'"
      :variable-description="'Mot de passe pour confirmer'"
      :icon="'lock'"
      :placeholder="'Ex: ••••••••'"
      :width="20"
      class="mt-6"
    />
    <ButtonFoodzUp :title="'Enregistrer'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
    <nuxt-link class="text-gray-500 hover:underline w-full ml-2" to="/auth/oublie">
      Mot de passe oublié ?
    </nuxt-link>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'

@Component({
  components: { InputFoodzUp }
})
export default class FormUpdateUser extends Vue {
    @Prop({ required: true })
    user!: { name: string, surname: string, email: string, countryCode: string }

    password: string = ''

    // TODO: Update user
    updateUser () {
      console.log(this.user)
    }
}
</script>

<style scoped>

</style>
