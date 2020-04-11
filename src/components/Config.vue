<template>
  <div class="Preview">
    <span class="Option_Done" v-for="(n, index) in Config" :key="n+index">
        <span class="doneOption"><span class="lineNR"><span v-if="index <= 8">0</span>{{index+1}}.</span>{{n.option}} "{{n.value}}"</span>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Config',
  data () {
    return {}
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'Config'
    ])
  }
}
</script>