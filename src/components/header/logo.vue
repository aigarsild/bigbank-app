<script>
export default {
  name: "Logo",
  props: {
    msg: String
  }
};
</script>

<template>
  <b-navbar-brand href="#">
    <BIconLightningFill></BIconLightningFill>{{ msg }}
  </b-navbar-brand>
</template>

<style lang="scss">
</style>
