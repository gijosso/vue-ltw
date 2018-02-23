<template>
  <div class="margin-bottom">
    <div>
      <div class="row">
        <div class="medium-6 columns" style="text-align: center;">
          <h3>Signup</h3>
          <input type="text" name="email" placeholder="email or username" v-model="email">
          <input type="password" name="password" placeholder="password" v-model="password">
          <input type="text" name="phone number" placeholder="phone_number" v-model="phone_number">
          <input type="text" name="firstname" placeholder="firstname" v-model="firstname">
          <input type="text" name="lastname" placeholder="lastname" v-model="lastname">
          <a class="button" @click="sendSignupRequest">Sign up</a>
        </div>
        <!-- <div class="medium-6 columns" style="text-align: center;">
          <h3>Facebook</h3>
          <a class="button">Sign up with Facebook</a>
        </div> -->
      </div>
    </div>
    <div class="row">
      <span v-if="signupFailed" class="error-msg rounded">{{ signupError }}</span>
      <span v-if="networkFailed" class="error-msg rounded">{{ networkError }}</span>
    </div>
  </div>
</template>


<script>
  const axios = require('axios');

  export default {
    name: 'Signup',
    data() {
      return {
        isActive: false,
        email: '',
        password: '',
        phone_number: '',
        firstname: '',
        lastname: '',
        signupError: 'Wrong credentials',
        networkError: 'Something went wrong, try again',
        signupFailed: false,
        networkFailed: false,
      }
    },
    methods: {
      toggleSignup() {
        this.isActive = !this.isActive;
        this.networkFailed = false;
        this.signupFailed = false;
      },
      sendSignupRequest() {
        // deactivate error messages
        this.signupFailed = false;
        this.networkFailed = false;

        const self = this;
        const deviceId = '12345';
        const force_verify = false;
        const language = 'en';
        const request_body = {
          mail: self.email, password: self.password, phone_number: self.phone_number, firstname: self.firstname,
          lastname: self.lastname, force_verify: force_verify, language: language, deviceId: deviceId
        };

        axios.post(this.$store.state.backend_url + 'user/create', request_body)
          .then(function (response) {
            // Signing up refused
            if (typeof response.data.errors !== 'undefined' && response.data.errors.length > 0) {
              self.signupFailed = true
            }
            // Signing in successful
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
              self.signupFailed = false;
            }
          })
          .catch(function (error) {
            // Wu oh! Something went wrong
            console.log(error.message);
            self.signupFailed = true;
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

  .margin-bottom {
    margin-bottom: 1em;
  }

  .rounded {
    border-radius: 4px;
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

  .error-msg {
    background-color: rgba(255, 0, 0, 0.48);
    margin: 10px 0;
    padding: 10px;
    color: #ffffff;
    transition: opacity 600ms;
    display: block;
  }
</style>
