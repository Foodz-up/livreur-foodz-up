<template>
  <div class="auth-container sm:bg-white h-screen w-screen sm:flex justify-center items-center flex-none">
    <FormRegistration />
  </div>
</template>
<script>

import FormRegistration from '~/components/Forms/FormRegistration.vue'

export default {
  auth: false,
  components: { FormRegistration },
  layout: 'noSidebar'
}
</script>
