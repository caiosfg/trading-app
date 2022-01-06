<template>
  <v-app>
    <v-content>
    <Header />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header }
}
</script>

<style scoped>

</style>
