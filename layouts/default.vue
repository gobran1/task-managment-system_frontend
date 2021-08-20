<template>
  <v-app>
    <v-app-bar
      flat
      app
    >

      <v-app-bar-nav-icon
        @click="navigationDrawer = !navigationDrawer"
      >
      </v-app-bar-nav-icon>

      <v-app-bar-title>
        <v-btn to="/">
          project manager
        </v-btn>
      </v-app-bar-title>


      <v-spacer/>

      <v-btn text to="/projects">
        Dashboard
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="navigationDrawer"
      app
    >

      <v-list>
        <v-list-item to="/projects">
          <v-list-item-content>
            <v-list-item-title>
              Dahboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
  export default {
    name: 'default',
    data() {
      return {
        navigationDrawer: false
      }
    },
  }
</script>
