<template>
  <div id="app">
    <router-view/>
    <!-- <Preview/> -->
    <button v-if="$route.path === '/'" class="getConfig" @click="goTo('config')">Config</button>
    <button v-else class="getConfig" @click="goTo('/')">Options</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Preview from './components/Preview'
export default {
  name: 'App',
  components: { Preview },
  data () {
    return {
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'Config'
    ])
  },
  methods: {
    goTo (url) {
      this.$router.push(url)
    }
  }
}
</script>
