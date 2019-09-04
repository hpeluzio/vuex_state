<template>
  <div class="hello">
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { /*mapState,*/ mapGetters, /*mapMutations,*/ mapActions  } from 'vuex'

export default {
  // props: {
  //   msg: 'String'
  // },
  computed: {
    //msg: 'rota2',
    //counter: 0
    // ... mapState({
    //   counter: state => state.counter
    // }),    
    ... mapGetters([
      'counter'
    ]),       

 
  },

  methods: {
    // ... mapMutations([
    //   'decrement', 'increment'
    // ])
    ... mapActions([
      'decrement', 
      'increment'
    ])    
  }
}
</script>

