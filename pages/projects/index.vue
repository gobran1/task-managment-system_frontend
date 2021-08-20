<template>
  <v-container>
    <div class="text-h5">My Projects</div>
    <v-divider class="mt-2 mb-4"/>
    <project-items :projects="projects"/>
  </v-container>
</template>
<script>
  import {ProjectItems} from "../../.nuxt/components";
  import {mapGetters} from "vuex"

  export default {
    name: "projectPage",
    components: {
      ProjectItems
    },
    computed: {
      ...mapGetters({projects:'getProjects'}),
    },
    created() {
      this.$store.dispatch("fetchAllProjects");
    }
  }
</script>
