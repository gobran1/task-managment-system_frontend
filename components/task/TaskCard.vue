<template>
  <v-card class="my-8">
    <v-card-title>
      {{task.title}}
    </v-card-title>
    <v-card-subtitle class="d-flex">
      <span>{{task.statusCode}}</span>
      <v-spacer/>
      <span>{{task.createdAt}}</span>
    </v-card-subtitle>
    <v-card-text class="pl-6">
      {{task.description}}
    </v-card-text>

    <div class="d-flex mx-2 mb-4 text-body-2">
      <span>Estimated time: {{task.expectedWorkHours}} hours</span>
      <v-spacer/>
      <span v-if="!!remainingTime">remaining time: {{remainingTime}} hours</span>
    </div>

    <v-divider/>
    <v-card-actions class="text-body-2">
      <div v-if="!!task.user">
        By:
        <span class="text-body-1">{{task.user.name}}</span>
      </div>
      <v-spacer/>
      <div>
        points:
        <span class="text-body-1">{{task.points}}</span>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "TaskCard",
    props: {
      task: {
        type: Object,
        required: true
      },
    },
    remainingTime() {
      return null
    }
  }
</script>

<style scoped>

</style>
