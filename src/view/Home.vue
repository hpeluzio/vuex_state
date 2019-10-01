<template>
  <div class="container">
    <h1>{{ msg }}</h1>
        <!-- <button type="submit" @click="login" class="btn btn-primary">Logar</button> -->
        <button @click="deslogar" class="btn btn-danger">Deslogar</button>    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
      msg: 'home'
  }),
  methods: {
    ... mapActions('auth', ['setDeslogarAct']),

    deslogar() {
      
      this.setDeslogarAct
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
