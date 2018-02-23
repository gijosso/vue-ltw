<template>
  <div>
    <div class="colorful ltw">
      <header>
        <div class="top-bar hide-for-small-only" id="main-menu">
          <div class="top-bar-left">
            <ul class="menu">
              <li class="menu-title"><a href="#home">LearnTheWorld</a></li>
              <li><a href="#games">Games &#127922;</a></li>
              <li><a href="#unlockables">Unlockables &#128275;</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><a class="button" href="#home" style="margin-right: 15px;">Get credits</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div class="row hero">
        <div class="large-10 medium-11 medium-centered columns">
          <div class="header margin-bottom">
            <h1>Welcome back !</h1>
          </div>
          <div class="">
            <profile></profile>
          </div>
        </div>
      </div>
      <div class="diagonal-to-white but-games" style="margin-bottom: -1px;"></div>
    </div>

    <div class="colorful games">
      <statistics></statistics>
      <div class="flipped diagonal-to-white but-unlockables" style="margin-bottom: -1px;"></div>
    </div>

    <div class="colorful unlockables" style="padding-bottom: 5em;">
      <more-games></more-games>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Profile from './Profile/Index.vue'
  import MoreGames from './MoreGames/Index.vue'
  import AppFooter from '../AppFooter/Index.vue'
  import Statistics from './Profile/Statistics.vue'

  const axios = require('axios');

  export default {
    name: 'Home',
    data() {
      return {
        tabToggle: true
      }
    },
    components: {
      Profile,
      MoreGames,
      AppFooter,
      Statistics
    },
    methods: {
      toggleTabs() {
        this.tabToggle = !this.tabToggle
      }
    },
    // called before instanciation of the vue
    beforeCreate: function () {
      const self = this;

      //Making requests to fetch all needed data
      function getUserProfile() {
        axios.post(self.$store.state.backend_url + 'user/get/profile', self.$store.state.madjoh)
          .then(function (response) {
            // something was wrong with the request
            if (typeof response.data.errors !== 'undefined' && response.data.errors.length > 0) {
              console.log('Failed request: get user profile')
            }
            // successful request
            else {
              self.$store.commit('updateProfile', response.data.data.profile)
            }
          })
          .catch(function (error) {
            // Something went wrong
            console.log(error.message);
          });
      }

      function getUserStats() {
        axios.post(self.$store.state.backend_url + 'get/stats', self.$store.state.madjoh)
          .then(function (response) {
            // something was wrong with the request
            if (typeof response.data.errors !== 'undefined' && response.data.errors.length > 0) {
              console.log('Failed request: get user stats')

            }
            // successful request
            else {
              self.$store.commit('updateStats', response.data.data.stats)
            }
          })
          .catch(function (error) {
            // Something went wrong
            console.log(error.message);
          });
      }


      // check whether user is connected
      // redirects onto LP if not
      if (self.$store.state.madjoh.token === '') {
        //self.$router.push({name: 'LandingPage'});
      }
      else {
        // send all requests altogether
        axios.all([getUserProfile(), getUserStats()])
          .then(axios.spread(function (acct, perms) {
            // All requests are now complete
          }));
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

  /*topbar*/
  .top-bar {
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px 20px;
  }

  .top-bar::after {
    clear: both;
  }

  .top-bar::before, .top-bar::after {
    content: ' ';
    display: table;
  }

  .top-bar .top-bar-left, .top-bar .top-bar-right {
    width: auto;
  }

  .top-bar .top-bar-left, .top-bar .top-bar-right {
    /*width: 100%;*/
  }

  .top-bar-left {
    float: left;
    margin-left: 1em;
  }

  .top-bar-right {
    float: right;
  }

  .menu {
    margin: 0;
    list-style-type: none;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.25rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .top-bar .menu-title {
    line-height: 1em;
    font-size: 1.8em;
    font-weight: 500;
    text-shadow: 1px 0 0;
  }

  .menu > li {
    display: table-cell;
    vertical-align: middle;
  }

  .menu > li > a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 1.5rem 2rem;;
    line-height: 1;
  }

  .top-bar li a {
    position: relative;
    text-transform: uppercase;
    font-size: 0.9em;
    margin-top: 0.3em;
    text-decoration: none;
  }

  .top-bar li a:hover {
    /*text-decoration: underline;*/
  }

  .top-bar li a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .top-bar li a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .top-bar .menu-title a {
    text-transform: none;
    margin-top: 0;
    text-decoration: none;
  }

  .top-bar .menu-title a:hover {
    color: #ffbb56;
    text-shadow: 1px 0 0 #ffbb56;
    text-decoration: none;
  }

  .top-bar .top-bar-right {
    line-height: 1.6em;
  }

  /* hero */
  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .row .row {
    margin-left: -0.625rem;
    margin-right: -0.625rem;
  }

  .hero .header {
    margin-top: 4em;
  }

  .hero .header h1 {
    font-size: 3.5em;
    margin-bottom: 0;
  }

  .margin-bottom {
    margin-bottom: 1em;
  }

  /* body*/
  .colorful.ltw {
    /*background: linear-gradient(to top left, #4c80d5, #848dff);*/
    /*background: linear-gradient(170deg, rgb(107, 46, 254), rgb(147, 86, 245) 50%, rgb(172, 162, 248));*/
    background: linear-gradient(170deg, rgb(46, 124, 254), rgba(46, 124, 254, 1) 50%, rgb(144, 187, 255))
  }

  .colorful.games {
    /*background: linear-gradient(170deg, rgb(46, 254, 139), rgb(86, 216, 245) 100%, rgb(239, 252, 255));*/
    background: white;
  }

  .colorful.unlockables {
    background: linear-gradient(170deg, #ffaa60, #ffaa60 50%, #ffe99b);
  }

  .flipped {
    transform: scale(-1, 1) !important;
  }

  .diagonal-to-white {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 130px 100vw 0 0;
    border-color: transparent white transparent transparent;
    transform: scale(1.0001);
  }

  .diagonal-to-white.but-games {
    border-color: transparent white transparent transparent;
  }

  .diagonal-to-white.but-unlockables {
    border-color: transparent #ffaa60 transparent transparent;
  }

  .logos-bg-wrapper .logos-bg-overflow .logos-bg {
    opacity: 0.65;
    /*background-image: url('/static/assets/background.jpg');*/
    background-size: cover;
    z-index: 0;
    height: 400px;
    width: 100%;
  }

  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .flipped {
    transform: scale(-1, 1) !important;
  }

  .columns:last-child:not(:first-child) {
    float: right;
  }

  .margin-bottom {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 40em) {
    .medium-centered, .medium-centered:last-child:not(:first-child) {
      float: none;
      clear: both;
    }

    .medium-centered {
      margin-left: auto;
      margin-right: auto;
    }

    .medium-11 {
      width: 91.66667%;
    }

    .columns {
      width: 100%;
      float: left;
      padding-left: 0.9375rem;
      padding-right: 0.9375rem;
    }

    .medium-collapse > .columns {
      padding-left: 0;
      padding-right: 0;
    }

    .medium-centered {
      margin-left: auto;
      margin-right: auto;
    }

    .medium-centered, .medium-centered:last-child:not(:first-child) {
      float: none;
      clear: both;
    }
  }
</style>
