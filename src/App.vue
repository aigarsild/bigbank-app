<script>
import StartGame from "./components/startgame.vue";
import Header from "./components/header/header.vue";
import Dashboard from "./components/dashboard.vue";

export default {
  name: "App",
  components: {
    StartGame,
    Header,
    Dashboard
  }
};
</script>

<template>
  <div id="app">
    <div v-if="this.$root.$data.gameData">
      <Header />
      <Dashboard />
    </div>

    <div v-else>
      <StartGame />
    </div>
  </div>
</template>