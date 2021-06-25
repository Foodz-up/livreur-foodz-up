<template>
  <div class="p-5 bg-white rounded sm:flex-none flex flex-col items-center">
    <h1 class="title text-center p-3 text-xl">
      Création de compte
    </h1>
    <form class="w-96" method="post" @submit.prevent="register">
      <InputFoodzUp
        v-model="firstName"
        :value="firstName"
        :input-variable="'firstName'"
        :variable-description="'Prénom'"
        :icon="'profile'"
        :placeholder="'Marcel'"
        :width="20"
        :type="text"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="lastName"
        :value="lastName"
        :input-variable="'lastName'"
        :variable-description="'Nom'"
        :icon="'profile'"
        :placeholder="'Dupuit'"
        :width="20"
        :type="text"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="email"
        :value="email"
        :input-variable="'email'"
        :variable-description="'Adresse mail'"
        :icon="'envelope'"
        :placeholder="'Ex: prenom@domaine.fr'"
        :width="20"
        :type="email"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="password"
        :value="password"
        :input-variable="'password.password'"
        :variable-description="'Mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        :type="password"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="password"
        :value="confirmation"
        :input-variable="'password.confirmation'"
        :variable-description="'Confirmer mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        :type="password"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="cityCode"
        :value="cityCode"
        :input-variable="'cityCode'"
        :variable-description="'Code postal'"
        :icon="'number'"
        :placeholder="'62000'"
        :width="20"
        :type="text"
        class="mb-3 text-sm"
      />
      <p v-if="errorMessage.length" class="text-red-700">
        {{ errorMessage }}
      </p>
      <div class="text-center">
        <ButtonFoodzUp :title="'Valider'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80 mb-3" />
        <div class="text-sm">
          <nuxt-link class="text-gray-500 hover:underline w-full ml-2" to="/auth/connexion">
            J'ai déjà un compte Foodzup
          </nuxt-link>
        </div>
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
export default class FormRegistration extends Vue {
    @Prop()
    firstName!: string;

    @Prop()
    lastName!: string;

    @Prop()
    email!: string;

    @Prop()
    password!: {
        password: string,
        confirmation: string
    }

    @Prop()
    cityCode!: string;

    @Prop()
    errorMessage: string = '';

    register = () => {
      if (this.password.password.length && this.password.password !== this.password.confirmation) {
        this.errorMessage = 'Les mots de passes saisis sont différents'
        return
      }
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password.password,
        cityCode: this.cityCode
      }
      alert(user)
    }
}
</script>

<style scoped>

</style>
