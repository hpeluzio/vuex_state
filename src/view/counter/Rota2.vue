<template>
  <div class="hello">
    <h1>Counter: {{ count }}</h1>
    <h1>Counter: {{ valor }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
    <button @click="testeTeste">testeTeste</button>
    <button @click="testeTesteAction">testeTesteAct</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'

export default {
  // props: {
  //   msg: 'String'
  // },
  created() {
    console.log('Rota2 . vue', this.counter)
    console.log(' typeofcounter:::::::', typeof(this.counter))
  },  
  computed: {
    valor() {
      // return this.$store.counter.getters.total
      return this.$store.getters['counter/total']
    },
    ...mapState('counter', {
      count: state => state.count,
    })
    
   
  },
 
  methods: {
    testeTeste() {
      this.$store.commit('counter/testeTeste', 2)
    },

    testeTesteAction() {
      this.$store.dispatch('counter/testeTesteAct', 2)
    },

// ... mapMutations([
    //   'decrement', 'increment'
    // ]),
    // ... mapActions([
    //   'decrement', 
    //   'increment'
    // ])    
    ...mapActions('counter', [
        'decrement', // -> this.foo()
        'increment', // -> this.foo()
        
    ])

    
  }
}
</script>

