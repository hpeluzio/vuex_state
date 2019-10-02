<template>
  <div class="container">
    <!-- <h1>{{ msg }}</h1> -->
        <!-- <button type="submit" @click="login" class="btn btn-primary">Logar</button> -->
      <form>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            type="name"
            name="name"
            v-model="name"
            class="form-control"
            id="name"
            placeholder="Enter Nome"
          />
        </div>
        
      </form>       
      <button @click="nomesubmit" class="btn btn-primary">Submit</button> 
      <!-- <button @click="deslogar" class="btn btn-danger">Deslogar</button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
      msg: 'home',
      name: '',
      name2: ''
  }),

  mounted() {
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name')
    }
    window.addEventListener("storage", this.onStorageUpdate);
  },
  // beforeDestroy() {
  //   window.removeEventListener("storage", this.onStorageUpdate);
  // },
  watch: {
    // name(newName) {
    //   localStorage.setItem('name', newName)
    // }
  },


  methods: {
    onStorageUpdate(event) {
      console.log('onStorageUpdate', event)
      this.$store.state.rota1.rota1 = 999
      // if (event.key === "name2") {
      //   console.log('STORAGE ESCUTOU')
      //   this.name = event.newValue;
      // }
    },
    nomesubmit() {
      console.log('name: ', this.name) 
      localStorage.setItem('name2', this.name)
    },

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
