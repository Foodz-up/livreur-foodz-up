<template>
  <div class="commande-card w-full flex items-center hover:bg-gray-50" @click="clicked">
    <img :src="require(`assets/img/${img}`)" class="h-32">
    <div class="p-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="font-thin text-sm">
        <span class="font-medium">Distance :</span> {{ distance }} km
      </p>
      <p class="font-thin text-sm">
        Paiment : {{ paimentPrice }}€
      </p>
      <p class="font-thin text-sm">
        <span class="font-medium">Position commande :</span> {{ addressIn }}
      </p>
      <p class="font-thin text-sm">
        <span class="font-medium">Livrer au :</span> {{ addressOut }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'
import { IUser } from '~/store/interfaces'
import { IRestaurant } from '~/store/interfaces/restaurant'

@Component
export default class CardCommande extends Vue {
    @Prop({ required: true })
    _id!: string

    @Prop()
    restaurant!: IRestaurant

    @Prop({ default: 'Sans nom' })
    client!: IUser

    @Prop()
    distance!: number

    @Prop()
    addressIn!: string

    @Prop()
    addressOut!: string

    @Prop()
    price!: number

    @Prop({ default: 'burger_king.jpeg' })
    img!: string

    clicked () {
      this.$emit('clicked')
    }

    get paimentPrice () {
      return (this.price / 19 + 0.001 * this.price * this.distance).toFixed(2)
    }
}
</script>

<style scoped>
.commande-card {
  cursor: pointer;
}

</style>
