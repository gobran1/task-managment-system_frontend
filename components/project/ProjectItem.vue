<template>
  <v-card :to="/projects/+project.id" link>
    <v-card-title>
      {{project.title}}
    </v-card-title>
    <v-card-text>
      {{project.description}}
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    name: "ProjectItem",
    props: {
      project: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style scoped>

</style>
