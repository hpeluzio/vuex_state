<template>
  <div>
    <div class="hello">
      <h1>Rota1 State: {{ state }}</h1>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>    
  </div>
</template>

<script>
import ls from 'local-storage'
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'

export default {
  
	beforeCreate() {
    //Atualizando o estado de acordo com localstorage
    this.$store.commit('initialiseStore');

    //Observa as alterações persistidas na tecla em outras guias. 
    //Dispara fn quando ocorre uma alteração, passando os seguintes argumentos.
    //ls.on(key, fn)
    var _this = this
    ls.on('statezera', function(val) {
      _this.callback()
    })

	},  
  created() {

  },
  watch: {

    counter_state: {
      handler: function(newValue, oldValue) {
        ls.set('statezera', this.$store.state)
      },
      deep: true
    },    
  }, 
   
  computed: {
    ...mapState('rota1', {
      rota1: state => state,
    }),
    state () {
      // return this.$store.state.counter
      return this.$store.state
    }
 },
 
 methods: {
    callback () {
      //console.log('OLA callback INSIDE')
      this.$store.replaceState(ls.get('statezera'))
      //this.$store.state = ls.get('statezera');
    },   
 
    ...mapActions('rota1', [
        'decrement', // -> this.foo()
        'increment', // -> this.foo()
    ])

    
  }
}
</script>

