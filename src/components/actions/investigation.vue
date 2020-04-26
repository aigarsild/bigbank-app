<script>
import axios from "axios";

export default {
  name: "Investigation",

  props: {
    msg: String
  },

  data() {
    return {
      showContent: false
    };
  },

  mounted() {
    this.$root.$on('bv::dropdown::show', () => 
      this.runInvestigation()
    )
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
  <div class="w-100">
    <div class="mb-5 investigation">
      <h3 class="display-5 w-100 font-weight-bold mt-5 mb-2"><BIconSearch></BIconSearch> Investigation</h3>
      <div class="w-100 mb-2">Here you can see what sort of repuation you have</div>

      <b-dropdown id="dropdown-text" text="Click to see your reputation" class>
        <b-dropdown-text style="width: 100%;" @click="runInvestigation">
          <div class="card-text" v-if="showContent">
            <div class="mb-2">
              <BIconPeopleFill></BIconPeopleFill> People:
              <strong>{{ this.$root.$data.gameInvestigations.people }}</strong>
            </div>
            <div class="mb-2">
              <BIconBuilding></BIconBuilding> State:
              <strong>{{ this.$root.$data.gameInvestigations.state }}</strong>
            </div>
            <div class="mb-2">
              <BIconOutlet></BIconOutlet> Underworld:
              <strong>{{ this.$root.$data.gameInvestigations.underworld }}</strong>
            </div>
          </div>
        </b-dropdown-text>
      </b-dropdown>
    </div>
  </div>
</template>

<style lang="scss">
.investigation {
  .alert {
    padding: 0;
  }

  .dropdown {
    button {
      background-color: #3b4680;
      border: none;
      padding: 1rem 2.5rem;
      font-weight: bold;
    }
  }
}
</style>
