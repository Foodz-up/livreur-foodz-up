<template>
  <div class="sm:bg-white auth-container h-screen w-screen sm:flex justify-center items-center flex-none">
    <FormAuthentication />
  </div>
</template>

<script>
import FormAuthentication from '~/components/Forms/FormAuthentication.vue'

export default {
  components: { FormAuthentication },
  layout: 'noSidebar'
}
</script>
