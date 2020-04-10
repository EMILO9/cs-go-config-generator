<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="info"><i class="fas fa-info-circle"></i> All options are set to default, do not change any value if you dont know what it does.</div>
    <Preview/>
    <button class="getConfig">I think im done with the configurations, lets see how it looks so far. (currently unavailable)</button>
  </div>
</template>

<script>
import Preview from './components/Preview'
export default {
  name: 'App',
  components: { Preview }
}
</script>
