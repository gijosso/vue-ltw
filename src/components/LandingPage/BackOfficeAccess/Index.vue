<template>
  <div class="back-office-access">
    <login v-show="showLogin"></login>
    <signup v-show="showSignup"></signup>
  </div>
</template>

<script>

import Login from './Login'
import Signup from './Signup'

export default {
  name: 'BackOfficeAccess',
  props: {
    showLogin: {
      type: Boolean
    },
    showSignup: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  components: {Login, Signup}
}
</script>

<style scoped>
  .back-office-access {
    /*margin: 0 0 75px 0;*/
  }
</style>
