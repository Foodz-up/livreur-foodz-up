<template>
  <div>
    <CardNotification
      v-for="(notification, index) in listNotifications"
      :key="index"
      class="mb-5 mr-1"
      :message="notification.message"
      :status="notification.status"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { INotification } from '~/store/interfaces'
import NotificationStore from '~/store/notification'
import CardNotification from '~/components/Cards/CardNotification.vue'

@Component({
  components: { CardNotification }
})
export default class ListNotifications extends Vue {
  listNotifications: Array<INotification> = NotificationStore.notifications
}
</script>

<style scoped>

</style>
