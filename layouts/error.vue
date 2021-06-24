<template>
  <div>
    <div class="mx-6 my-10 custom-layout-height flex justify-center flex-col">
      <h1 class="font-semibold text-7xl text-medium">
        Erreur 404
      </h1>
      <span class="text-5xl my-3">
        Nous n'avons pas trouvé la page recherchée
      </span>
      <span class="text-xl italic">
        (Sinon je vends ma PS1 avec 21 jeux)
      </span>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.custom-layout-height{
  min-height: calc(100vh - 260px)
}

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
