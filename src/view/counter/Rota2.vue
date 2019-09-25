<template>
  <div class="hello">
    <h1>Counter: {{ count }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
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
    ... mapState({
      // counter: state => state.counter
      // ...mapState('counter', ['count', '']),

      ...mapState('counter', {
        count: state => state.count,

      })
    
    })
  },


  // computed: {
  //   //msg: 'rota2',

  //   // ... mapState({
  //   //   counter: state => state.counter
  //   // }),    
  //   // ... mapState([
  //   //   'counter'
  //   // ]),       

 
  // },

  methods: {
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

