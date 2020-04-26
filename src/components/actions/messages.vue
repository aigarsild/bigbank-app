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
      taskMessage: ""
    };
  },

  async created () {
    this.getMessages();
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
      this.loading = true;

      axios
        .post(
          store.apiBaseUrl +
            store.gameData.gameId +
            store.urlParams.solveMessages +
            adId
        )
        .then(response => {
          if (response.data.lives === 0) {
            this.showModal('gameover-modal');
            setTimeout(this.gameOver, 5000);
            return
          }

          if (response.data.success) {
            this.taskMessage = response.data.message;
            this.showModal('message-modal');
          } else {
            this.taskMessage = response.data.message;
            this.showModal('message-modal');
          }

          store.gameData.gold = response.data.gold;
          store.gameData.highScore = response.data.highScore;
          store.gameData.lives = response.data.lives;
          store.gameData.score = response.data.score;
          store.gameData.turn = response.data.turn;

          this.getMessages();

          this.loading = false;
        })
        .catch(error => {
          console.log(error.response.status);

          this.taskMessage = "Oopsy, looks like you got lost, got back and find a new task";
          this.showModal();
          this.getMessages();
          this.loading = false;
        });
    },

    gameOver: function() {
      this.$root.$data.gameData = null
    },

    showModal(modalName) {
      this.$refs[modalName].show();
    },
    hideModal(modalName) {
      this.$refs[modalName].hide();
    },
    toggleModal(modalName) {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs[modalName].toggle("#toggle-btn");
    }
  }
};
</script>

<template>
  <div class="w-100">
    <div v-if="loading" class="loader w-100 text-center pt-5 pb-5">
        <b-spinner type="grow" label="Spinning"></b-spinner>
    </div>

    <b-modal ref="message-modal" id="modal-2" title="Message alert" ok-only>
      <p class="my-4">{{ this.taskMessage }}</p>
    </b-modal>

    <b-modal ref="gameover-modal" id="modal-1" title="Message alert" ok-only>
      <p class="my-4">GAMEEE OOOVER BOJJJJJ</p>
    </b-modal>

    <h2 class="display-5 w-100 font-weight-bold mb-2 mt-5"><BIconChatDotsFill></BIconChatDotsFill> Messages</h2>
    <div class="w-100 mb-3">Here are all the messages to solve</div>

    <div class="row">
      <div
        v-for="item in this.$root.$data.gameMessages"
        v-bind:key="item.id"
        class="mb-5 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      >
        <b-card class="shadow border-0" v-bind:header="'Probability: ' + item.probability">
          <b-card-text>
            <ul class="list-unstyled">
              <li class="mb-1">
                <strong>Reward:</strong>
                {{ item.reward }}
              </li>
              <li class="mb-1">
                <strong>Expires in:</strong>
                {{ item.expiresIn }}
              </li>
              <li class="mb-1">
                <strong>Message:</strong>
                {{ item.message }}
              </li>
            </ul>
          </b-card-text>
          <p
            class="shadow btn btn-dark font-weight-bold mt-4 mb-4 pt-3 pb-3 pl-5 pr-5 w-100"
            @click="solveMessage"
            v-bind:data-id="item.adId"
          >Solve this task</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  height: 100%;
  .card-header {
    background-color: #89ffc7;
    border: none;
    font-weight: bold;
  }
}
</style>
