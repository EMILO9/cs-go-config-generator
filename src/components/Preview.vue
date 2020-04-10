<template>
  <div class="Preview">
    <span class="Option_Preview" v-for="(n, index) in Config" :key="n+index">
        <span class="option">{{n.option}} "{{n.value}}"</span>
          <input type="range" class="btn" v-model="n.value" :min="n.min" :max="n.max" :step="n.step">
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Preview',
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
