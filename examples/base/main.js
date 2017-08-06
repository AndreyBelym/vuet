import Vue from 'vue'
import Vuet, { mapModules } from 'vuet'

Vue.use(Vuet)

const vuet = new Vuet()
vuet.register('test', {
  data () {
    return {
      count: 0
    }
  },
  fetch () {
    this.count = 1000
  },
  plus () {
    this.count++
  },
  reduce () {
    this.count--
  }
})

const App = {
  mixins: [
    mapModules({
      test: 'test'
    })
  ],
  template: `
    <div>
      <div class="count">{{ test.count }}</div>
      <button @click="$test.plus">plus</button> 
      <button @click="$test.reduce">reduce</button> 
      <button @click="$test.fetch">fetch</button> 
      <button @click="$test.reset">reset</button> 
    </div>
  `
}

export default new Vue({
  el: '#app',
  vuet,
  render (h) {
    return h(App)
  }
})