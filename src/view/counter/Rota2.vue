<template>
  <div>
    <!-- <div class="hello">
      <h1>Count: {{ count }}</h1>
      <h1>testeTeste: {{ valor }}</h1>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
      <button @click="testeTeste">testeTeste</button>
      <button @click="testeTesteAction">testeTesteAct</button>
    </div>

    <div class="hello">
      <h1>Count2: {{ count2 }}</h1>
      <button @click="decrement2">Decrement</button>
      <button @click="increment2">Increment</button>
    </div> -->

    <div class="hello">
      <h1>Rota2 State: {{ state }}</h1>
      <!-- <h1>Counter_state: {{ counter_state }}</h1> -->
      <button @click="decrement2">Decrement</button>
      <button @click="increment2">Increment</button>
    </div>    
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'

export default {
  // props: {
  //   msg: 'String'
  // },
  data () {
    return {
      //count2: 0
    }
  },

  created() {
    //Pegando o localstorage e setando no estado
    // this.$ls.set('counter_state', this.$store.state.counter)
    // //console.log(JSON.parse(this.$ls.get('counter_state')))
    // console.log(typeof(this.$ls.get('counter_state')))
    // console.log(this.$ls.get('counter_state'))
    //this.$store.state.counter = Object.assign(this.$store.state.counter, this.$ls.get('counter_state'));
    


    // this.$store.state.counter = JSON.parse(this.$ls.get('counter_state'))
    //this.count2 = this.$ls.get('count2', 0);
    //console.log('this.$store.state.counter.count2: ',this.$store.state.counter.count2)
    //this.$store.state.counter.count2 = this.$ls.get('count2');
    // this.$store.state.counter = this.$ls.get('counter_state');
    // //console.log(this.$store.state.counter)
    // console.log('this.counter_state', this.counter_state)
    // var _this = this
    // this.$ls.on('counter_state', function(val) {
    //   //this.$store.state.counter.count2 = val;
    //   _this.callback()
    //   //console.log('Olá CALLBACK')

    // })   
    // var _this = this
    // this.$ls.on('count2', function(val) {
    //   //this.$store.state.counter.count2 = val;
    //   _this.callback()
    //   //console.log('Olá CALLBACK')

    // });
  },

  mounted () {

  }, 
    
  watch: {
    // count2: function(val) {
    //   console.log('count2 val: ', val)
    //   this.$ls.set('count2', val) 
    // },
    // count2(newValue, oldValue) {
    //   //console.log(`Updating from ${oldValue} to ${newValue}`);
    //   console.log('oldValue: ', oldValue, typeof(oldValue), '  -  newValue: ', newValue, typeof(newValue))

    //   // Do whatever makes sense now
    //   if (newValue !== oldValue) {
    //     this.$ls.set('count2', newValue)
    //   }
    // },

    counter_state: {
      handler: function(newValue, oldValue) {
        //console.log('counter_state mudou')
        //console.log(`Updating from ${oldValue} to ${newValue}`);
        //console.log('oldValue: ', oldValue, typeof(oldValue), '  -  newValue: ', newValue, typeof(newValue))
    
        // Do whatever makes sense now
        //if (newValue === oldValue) {
          //console.log('Ola')
          this.$ls.set('counter_state', this.$store.state.counter)
        //}
      },
      deep: true
    },    
    // counter_state(newValue, oldValue) {
    //   console.log('TESTESTE')
    //   //console.log(`Updating from ${oldValue} to ${newValue}`);
    //   console.log('oldValue: ', oldValue, typeof(oldValue), '  -  newValue: ', newValue, typeof(newValue))

    //   // Do whatever makes sense now
    //   if (newValue !== oldValue) {
    //     this.$ls.set('counter_state', newValue)
    //   }
    // },

  }, 
   
  computed: {
    valor() {
      // return this.$store.counter.getters.total
      return this.$store.getters['counter/total']
    },
    ...mapState('counter', {
      count: state => state.count,
      count2: state => state.count2,
    }),
    counter_state () {
      // return this.$store.state.counter
      return this.$store.state.counter
    },
    state() {
      return this.$store.state
    }
    
   
  },
 
  methods: {
    callback () {
      //console.log('OLA callback INSIDE')
      this.$store.state.counter = this.$ls.get('counter_state');
    },   
    testeTeste() {
      this.$store.commit('counter/testeTeste', 2)
    },

    testeTesteAction() {
      this.$store.dispatch('counter/testeTesteAct', 2)
    },

    // increment2: function() {
    //   this.count2++;
    // },

    // decrement2: function() {
    //   this.count2--;
    // },

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
        'decrement2', // -> this.foo()
        'increment2', // -> this.foo()
        
    ])

    
  }
}
</script>

