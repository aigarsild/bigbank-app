<script>
import axios from "axios";

export default {
  name: "Messages",

  props: {
    msg: String
  },

  data() {
    return {
      loading: false,
      taskMessage: ''
    };
  },

  methods: {
    getMessages: function() {
      const store = this.$root.$data;
      this.loading = true;

      axios
        .get(
          store.apiBaseUrl + store.gameData.gameId + store.urlParams.messages
        )
        .then(response => {
          store.gameMessages = response.data;
          this.loading = false;

        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },

    solveMessage: function(e) {
      const store = this.$root.$data;
      const adId = e.target.dataset.id;

      axios
        .post(
          store.apiBaseUrl +
            store.gameData.gameId +
            store.urlParams.solveMessages +
            adId
        )
        .then(response => {
          store.gameData.gold = response.data.gold;
          store.gameData.highScore = response.data.highScore;
          store.gameData.lives = response.data.lives;
          store.gameData.score = response.data.score;
          store.gameData.turn = response.data.turn;

          this.getMessages();

          if (response.data.success) {
            this.taskMessage = 'yeee bojj'
            this.showModal()
          } else {
            this.taskMessage = 'noooo bojj :((('
            this.showModal()
          }

        })
        .catch(error => {
          console.log(error);
        });
    },

    showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
  }
};
</script>

<template>
  <div class="w-100">
    <div>
 
  <b-modal ref="my-modal" id="modal-1" title="BootstrapVue" ok-only>
    <p class="my-4">{{ this.taskMessage }}</p>
  </b-modal>
</div>

    <h2 class="display-5 w-100 font-weight-bold mb-2">Messages</h2>
    <div class="lead w-100 mb-5">Get all messages (tasks) from messageboard</div>
    <button @click="getMessages">Show messages / tasks</button>

    <div class="row">
      <div v-if="loading" class="w-100 text-center pt-5 pb-5"><b-spinner type="grow" label="Spinning"></b-spinner></div>

      <div v-for="item in this.$root.$data.gameMessages" v-bind:key="item.id" class="mb-4 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <b-card class="shadow border-0" v-bind:header="'Probability: ' + item.probability">
          <b-card-text>
            <ul>              
              <li><strong>Reward:</strong> {{ item.reward }}</li>
              <li><strong>Expires in:</strong> {{ item.expiresIn }}</li>
              <li><strong>Message:</strong> {{ item.message }}</li>
            </ul>
          </b-card-text>
          <p
            class="shadow btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5"
            @click="solveMessage"
            v-bind:data-id="item.adId">Solve this task</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  height: 100%;
  .card-header {
    background-color: #89FFC7;
    border: none;
    font-weight: bold;
}
}
</style>
