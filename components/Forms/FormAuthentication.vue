<template>
  <div class="p-5 bg-white rounded">
    <h1 class="title text-center p-3 text-xl">
      Connexion
    </h1>
    <form class="w-96" @submit.prevent="login">
      <InputFoodzUp
        v-model="email"
        :value="email"
        :input-variable="'email'"
        :variable-description="'Adresse mail'"
        :icon="'envelope'"
        :placeholder="'Ex: prenom@domaine.fr'"
        :width="20"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="password"
        :value="password"
        :input-variable="'password'"
        :variable-description="'Mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        class="mb-3 text-sm"
      />
      <p v-if="errorMessage.length" class="text-red-700">
        Email ou mot de passe incorrect
      </p>
      <div class="text-center">
        <ButtonFoodzUp :title="'Se connecter'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
        <nuxt-link class="text-gray-500 hover:underline w-full ml-2" to="/auth/oublie">
          Mot de passe oublié ?
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'

    @Component({
      components: { InputFoodzUp, ButtonFoodzUp }
    })
export default class FormAuthentication extends Vue {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: '' })
    errorMessage: string;

    login () {
      alert('Connexion utilisateur : ' + this.email)
    }
}
</script>

<style scoped>

</style>
