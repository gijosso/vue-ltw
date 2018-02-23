<template>
  <div style="color: white;">
    <showcase></showcase>
  </div>
</template>

<script>
  import Showcase from './Showcase'
  import Statistics from './Statistics'

  export default {
    name: 'profile',
    data() {
      return {}
    },
    components: {
      Showcase,
      Statistics
    },
    methods: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
