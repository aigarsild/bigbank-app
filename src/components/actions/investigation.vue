<script>
import axios from "axios";

export default {
  name: "Investigation",

  props: {
    msg: String
  },

  data() {
    return {
      showContent: false,
    };
  },

  methods: {
    runInvestigation: function() {
      const store = this.$root.$data;

      axios
        .post(
          store.apiBaseUrl +
            store.gameData.gameId +
            store.urlParams.investigation
        )
        .then(response => {
          store.gameInvestigations = response.data;
          this.showContent = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<template>
  <div class="w-100 text-center">
    <h2 class="display-5 text-center w-100 font-weight-bold mb-2">Investigation</h2>
    <div class="lead text-center w-100 mb-5">Run an investigation about your reputation</div>
    <button @click="runInvestigation">start investigation</button>

    <div v-if="showContent">
      <p>People: {{ this.$root.$data.gameInvestigations.people }}</p>
    <p>State: {{ this.$root.$data.gameInvestigations.state }}</p>
    <p>Underworld: {{ this.$root.$data.gameInvestigations.underworld }}</p>
    </div>
  </div>
</template>

<style lang="scss">
</style>
