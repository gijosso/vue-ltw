<template>
    <a href="/" class="logo-container">
      <div class="logo">
        <img class="img-logo" v-bind:src="''+url+''"/>
      </div>
    </a>
</template>

<script>
  export default {
    name: 'logo',
    data () {
      return {
        url: '/static/assets/ltw-logo-web.png'
      }
    },
    computed: {
      app_name () {
        return this.$store.state.app_name
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-container {
    display: table-cell;
    vertical-align: middle;
  }

  .logo {
    /* FIX */
    width: 70px;
    height: auto;
    margin: auto;
  }

  .img-logo {
    height: 100%;
    width: 100%;
  }
</style>
