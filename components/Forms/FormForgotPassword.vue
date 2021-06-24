<template>
  <div class="p-5 bg-white rounded sm:flex-none flex flex-col items-center">
    <h1 class="title text-center p-3 text-xl">
      Oubli de mot de passe
    </h1>
    <form class="w-96" @submit.prevent="sendVerificationMail">
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
      <p v-if="successMessage.length" class="text-green-700">
        {{ successMessage }}
      </p>
      <p v-if="errorMessage.length" class="text-red-700">
        {{ errorMessage }}
      </p>
      <div class="text-center">
        <ButtonFoodzUp :title="'Envoyer'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
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
    @Prop()
    email!: string;

    @Prop({ default: '' })
    successMessage!: string;

    @Prop({ default: '' })
    errorMessage!: string;

    sendVerificationMail () {
      this.successMessage = 'Un mail de vérification a été envoyé'
      alert('Email envoyé à ' + this.email)
    }
}
</script>

<style scoped>

</style>
