<script>
import Logo from "./logo.vue";

export default {
  name: "Header",

  components: {
    Logo
  },

  props: {
    msg: String
  }
};
</script>

<template>
  <header>
    <b-navbar toggleable="lg" type="light" fixed="top" variant="light">
      <b-container fluid="lg">
        <Logo msg="Dragons Game" />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <p>
                <BIconServer></BIconServer>
                <span> Gold: </span>
                <strong>{{ this.$root.$data.gameData.gold }}</strong>
              </p>

              <p>
                <BIconBarChartFill></BIconBarChartFill>
                <span> Level: </span>
                <strong>{{ this.$root.$data.gameData.level }}</strong>
              </p>

              <p>
                <BIconTrophy></BIconTrophy>
                <span> Score: </span>
                <strong>{{ this.$root.$data.gameData.score }}</strong>
              </p>

              <p>
                <BIconReplyAllFill></BIconReplyAllFill>
                <span> Turn: </span>
                <strong>{{ this.$root.$data.gameData.turn }}</strong>
              </p>

              <div v-b-popover.hover.bottom="this.$root.$data.gameData.lives + ' lives left'" title="">
                <p v-if="this.$root.$data.gameData.lives >= 3">
                  <span class="health"><BIconHeartFill></BIconHeartFill></span>
                  <strong> {{ this.$root.$data.gameData.lives }}</strong>
                </p>

                <p v-else-if="this.$root.$data.gameData.lives === 2">
                  <span class="health"><BIconHeartHalf></BIconHeartHalf></span>
                  <strong> 2</strong>
                </p>

                <p v-else-if="this.$root.$data.gameData.lives === 1">
                  <span class="health"><BIconHeart></BIconHeart></span>
                  <strong> 1</strong>
                </p>
              </div>

            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<style lang="scss">

.navbar-brand {
    font-weight: bold;
}

.navbar {
    &.bg-light {
        background-color: #ffffffc7 !important;
    }
}

.navbar-nav {
  p {
    margin: 0.5rem 1rem;
  }

  .health {
      color:hotpink;
  }
}

</style>
