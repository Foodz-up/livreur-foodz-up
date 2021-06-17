<template>
  <div class="container">
    <div>
      <Logo class="mx-auto" />
      <h1 class="title">
        livreur-foodz-up
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub {{ test }}
        </a>
      </div>
      <DsComponentFoodzUpSample />
      <button @click="req()">
        ddddd
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DsComponentFoodzUpSample } from 'ds-component-foodz-up'
import * as bnn from 'ds-method-foodz-up'
// TODO: Make ds-method-foodz-up work with index.d.ts
// @ts-ignore
import { bol } from 'ds-method-foodz-up'

export default Vue.extend({
  components: { DsComponentFoodzUpSample },
  computed: {
    test () {
      return bol.mamacita()
    }
  },
  methods: {
    async req () {
      const test = await bol.mamacita()
      console.log({ bnn, test })
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
