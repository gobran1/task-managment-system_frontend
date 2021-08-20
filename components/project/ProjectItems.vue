<template>
  <v-row>
    <v-col cols="3" v-for="project in projects">
      <project-item :project="project"/>
    </v-col>
  </v-row>
</template>

<script>
  import {ProjectItem} from "~/.nuxt/components";

  export default {
    name: "ProjectsItems",
    components: {
      ProjectItem
    },
    props: {
      projects: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style scoped>

</style>
