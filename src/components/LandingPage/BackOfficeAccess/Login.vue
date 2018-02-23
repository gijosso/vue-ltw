<template>
  <div class="margin-bottom">
    <div>
      <div class="row">
        <div class="medium-6 columns" style="text-align: center;">
          <h3>Login</h3>
          <input type="text" name="email" placeholder="email or username" v-model="email">
          <input type="password" name="password" placeholder="password" v-model="password">
          <a class="button" @click="sendLoginRequest">Sign in</a>
        </div>
        <!-- <div class="medium-6 columns" style="text-align: center;">
          <h3>Facebook</h3>
          <a class="button">Sign in with Facebook</a>
        </div> -->
      </div>
    </div>
    <div class="row">
      <span v-if="loginFailed" class="error-msg rounded">{{ loginError }}</span>
      <span v-if="networkFailed" class="error-msg rounded">{{ networkError }}</span>
    </div>
  </div>
</template>


<script>

  const axios = require('axios');

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        loginError: 'Wrong credentials',
        networkError: 'Something went wrong, try again',
        loginFailed: false,
        networkFailed: false,
      }
    },
    methods: {
      sendLoginRequest() {

        // deactivate error messages
        this.loginFailed = false;
        this.networkFailed = false;

        const deviceId = '12345';
        const self = this;
        axios.post(this.$store.state.backend_url + 'user/login', {
          deviceId: deviceId,
          mail: self.email,
          password: self.password
        })
          .then(function (response) {
            // Logging in refused
            if (typeof response.data.errors !== 'undefined' && response.data.errors.length > 0) {
              self.loginFailed = true
            }
            // Logging in successful
            else {
              // save provided Madjoh identification parameters
              self.$store.commit('saveMadjohIdentificationParameters', {
                id: response.data.data.id,
                token: response.data.data.token,
                deviceId: deviceId
              });

              // switch router to corresponding vue
              // i.e go to url '.../home' in this case (c.f router/index.js)
              self.$router.push({name: 'Home'});
              self.loginFailed = false;
            }
          })
          .catch(function (error) {
            // Wu oh! Something went wrong
            console.log(error.message);
            self.loginFailed = true;
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row::before, .row::after {
    content: ' ';
    display: table;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .columns {
    width: 100%;
    float: left;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  .medium-6 {
    width: 45%;
  }

  .button {
    display: block;
  }

  .button:hover {
    cursor: pointer;
  }

  input {
    border: none;
    border-bottom: 2px solid #337ab7;
    /*border-radius: 4px;*/
    outline: none;
    line-height: 30px;
    padding: 7px;
    margin-bottom: 5px;
  }

  .margin-bottom {
    margin-bottom: 2em;
  }

  .rounded {
    border-radius: 4px;
  }

  .error-msg {
    background-color: rgba(255, 0, 0, 0.48);
    margin: 10px 0;
    padding: 10px;
    color: #ffffff;
    transition: opacity 600ms;
    display: block;
  }
</style>
