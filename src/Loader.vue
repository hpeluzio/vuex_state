<template>

  <div id="loader" v-show="SET_LOADER" class="load">
    <div class="spin"></div>
    <div class="loading">CARREGANDO</div>
  </div>

</template>

<script>
export default {
  name: "loader",

  computed: {
    SET_LOADER() {
      return this.$store.state.loader
    }
  }
};
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
  }
  button {
    font-size: 26px;
    color: #fff;
    height: 50px;
    background: #7c4dff;
    border: none;
    border-radius: 50vh;
  }

  .load {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spin {
    background: #00000020;
    height: 150px;
    width: 150px;
    border-radius: 50vh;
    border: 5px solid #00000000;
    border-top: 5px solid #fff;
    animation: loading 3s linear infinite;
  }
  .loading {
    position: absolute;
    color: #fff;
  }
  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

