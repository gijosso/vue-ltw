<template>
  <div>
    <!--pop-->
    <div id="popup" class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <div class="content">
          <login></login>
          <signup></signup>
        </div>
      </div>
    </div>

    <!--top section-->
    <div class="colorful ltw" id="top">
      <app-header></app-header>
      <short-description></short-description>
      <div class="diagonal-to-white but-grey"></div>
    </div>

    <!--carousel section-->
    <div class="big-wrapper logos-bg-wrapper" style="height: 329px;">
      <div class="logos-bg-overflow">
        <div class="logos-bg"></div>
      </div>
      <div class="row medium-collapse">
        <div class="large-10 medium-11 medium-centered columns shadowed rounded games-tile hide-for-small-only">
          <div
            style="padding: 2em 2em 4em 2em; box-shadow: inset 0 -7px 17px -7px rgba(50, 50, 93, 0.1), inset 0 -2px 7px -7px rgba(0, 0, 0, 0.07);">
            <div class="row text-center big-margin-bottom">
              <h3 class="large-12 columns text-center" style="color: #a9b2f9; font-weight: bolder;">
                Our games:
              </h3>
              <carousel></carousel>
            </div>
            <div class="row text-center telescope-menu">

            </div>
          </div>
        </div>
      </div>
      <div class="diagonal-to-white but-dark hide-for-small-only"
           style="margin-top: -4em; position: relative; z-index: 5;">
      </div>
    </div>

    <!--serious gaming section-->
    <div id="serious-gaming" class="dark-bg">
      <div class="row" style="padding-top: 3em;margin-bottom: 1em;">
        <div class="medium-9 medium-centered columns light-color">
          <div class="row" style="margin-bottom: 3em;">
            <div class="large-12 columns text-center">
              <h2 style="color: white; font-weight: bolder;"><span class="important">Serious gaming</span> you said ?</h2>
            </div>
          </div>

          <div class="row margin-bottom">
            <div class="medium-6 columns">
              <div class="row">
                <div class="small-3 columns">
                  <div class="icon-circle icon-circle-students">
                    <img src="/static/assets/icons/classroom.png" alt="" class="icon icon-students">
                  </div>
                </div>
                <div class="small-9 columns">
                  <h4 class="icon-title">For students</h4>
                  <p>From elementary to middle school, this app help you through the program</p>
                </div>
              </div>
            </div>
            <div class="medium-6 columns" style="text-align: right">
              <div class="row">
                <div class="small-3 columns">
                  <div class="icon-circle icon-circle-grown-ups">
                    <img src="/static/assets/icons/parents.png" alt="" class="icon icon-grown-ups">
                  </div>
                </div>
                <div class="small-9 columns">
                  <h4 class="icon-title">For grown ups</h4>
                  <p>Learn about countries and their traditions</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="medium-6 columns">
              <div class="row">
                <div class="small-3 columns">
                  <div class="icon-circle icon-circle-travelers">
                    <img src="/static/assets/icons/traveler-with-a-suitcase.png" alt="" class="icon icon-travelers">
                  </div>
                </div>
                <div class="small-9 columns">
                  <h4 class="icon-title">For travelers</h4>
                  <p>Challenge yourself daily taking pictures of monuments</p>
                </div>
              </div>
            </div>

            <div class="medium-6 columns" style="text-align: right">
              <div class="row">
                <div class="small-3 columns">
                  <div class="icon-circle icon-circle-parties">
                    <img src="/static/assets/icons/users-group.png" alt="" class="icon icon-parties">
                  </div>
                </div>
                <div class="small-9 columns">
                  <h4 class="icon-title">For parties</h4>
                  <p>Challenge your friend with ranking and stats you can check here</p>
                </div>
              </div>
            </div>
          </div>
          <a href="https://www.apple.com/fr/ios/app-store/" class="button rounded shadowed"
             style="margin-top: 6em; display:block; color: white; text-align: center;">Download now!</a>
        </div>
      </div>

      <div style="height: 2em;"></div>
      <div class="diagonal-to-white but-grey"></div>
    </div>

    <!--feature section-->
    <div id="features" class="white-bg">
      <div class="row light-color" style="padding-top: 3em; padding-bottom: 2em;">
        <div class="medium-9 medium-centered columns huge-margin-top huge-margin-bottom">
          <h2 class="text-center medium-margin-bottom">
            <img src="/static/assets/ltw-logo-web.png" alt="" style="height: 3em; margin-right: 0.5em;">
            <span style="font-weight: bolder;">
              <span class="important" style="text-shadow: rgb(247, 247, 247) 1px 0 0;">LearnTheWorld</span> features
            </span>
          </h2>

          <div class="row huge-margin-bottom" style="color: black; margin-top: 4em;">
            <div class="medium-4 columns" style="padding: 0;">
              <h4>Play anonymously</h4>
              <p>Play without an account on the mobile app, and earn game credits</p>
            </div>
            <div class="medium-4 columns" style="padding: 0;">
              <h4>Create an account</h4>
              <p>The progress will be transferred to your new account!</p>
            </div>
            <div class="medium-4 columns" style="padding: 0;">
              <h4>Use the web app</h4>
              <p>Unlock features through the web app and find them on your mobile</p>
            </div>
          </div>

          <div class="row">
            <div class="large-12 columns text-center">
              <a href="#popup" class="button account shadowed rounded">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--footer section-->
    <app-footer></app-footer>
  </div>
</template>

<script>
  import ShortDescription from './ShortDescription'
  import Login from './BackOfficeAccess/Login.vue'
  import Signup from './BackOfficeAccess/Signup.vue'
  import AppHeader from '../AppHeader/Index.vue'
  import AppFooter from '../AppFooter/Index.vue'
  import Carousel from './Carousel'

  export default {
    name: 'LandingPage',
    data() {
      return {
        showLogin: false,
        showSignup: false
      }
    },
    components: {
      ShortDescription,
      Login,
      Signup,
      AppHeader,
      AppFooter,
      Carousel
    },
    methods: {
      toggleLogin() {
        this.showLogin = !this.showLogin;
        if (this.showSignup) {
          this.showSignup = false
        }
      },
      toggleSignup() {
        this.showSignup = !this.showSignup;
        if (this.showLogin) {
          this.showLogin = false
        }
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

  .colorful.ltw {
    /*background: linear-gradient(to top left, #4c80d5, #848dff);*/
    background: linear-gradient(170deg, rgb(46, 124, 254), rgba(46, 124, 254, 1) 50%, rgb(144, 187, 255));
  }

  .light-color {
    color: white;
  }

  .shadowed {
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  }

  .logos-bg-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logos-bg-wrapper .logos-bg-overflow .logos-bg {
    opacity: 0.65;
    /*background-image: url('/static/assets/background.jpg');*/
    background-size: cover;
    z-index: 0;
    height: 400px;
    width: 100%;
  }

  .huge-margin-bottom {
    margin-bottom: 5em;
  }

  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .logos-bg-wrapper .logos-bg-overflow {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diagonal-to-white.but-dark {
    border-color: transparent #ff6060 transparent transparent;
  }

  .diagonal-to-white {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 130px 100vw 0 0;
    border-color: transparent white transparent transparent;
    transform: scale(1.0001);
  }

  .dark-bg {
    /*background-color: #ff6060;*/
    background: linear-gradient(170deg, #ff6060, #ff6060 30%, #db3b72);
  }

  .small-3 {
    width: 25%;
  }

  .columns:last-child:not(:first-child) {
    float: right;
  }

  .small-9 {
    width: 75%;
  }

  .margin-bottom {
    margin-bottom: 1em;
  }

  .button.account {
    background: #ff7383;
    color: white;
    border: none;
    -webkit-transition: all 1000ms linear !important;
    -moz-transition: all 1000ms linear !important;
    -o-transition: all 1000ms linear !important;
    -ms-transition: all 1000ms linear !important;
    transition: all 1000ms linear !important;
  }

  .button.account:hover {
    background-color: #ffcc7a !important;
    color: white !important;
  }

  .icon-circle {
    padding: 0.8em;
    border-radius: 100px;
    width: 4em;
    height: 4em;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .icon {
    width: 80px;
    margin: -11px -11px;
  }

  .icon-circle-students {
    background: rgb(76, 255, 153);
    padding: 1.1em;
  }

  .icon-students {
    margin: -1px 0 0px -15px;
  }

  .icon-circle-grown-ups {
    background: rgb(238, 255, 159);
    padding: 1.1em;
    float: right;
    margin-right: 2em;
  }

  .icon-grown-ups {
    margin: 0 0 0 -11px;
    width: 74px;
  }

  .icon-circle-travelers {
    /*background: rgb(255, 125, 125);*/
    background: rgb(158, 184, 255);
  }

  .icon-travelers {
    margin: 0 0 0 -15px;
    width: 72px;
  }

  .icon-circle-parties  {
    /*background: rgb(242, 151, 255);*/
    background: rgb(255, 162, 239);
    padding: 0.7em;
    float: right;
    margin-right: 2em;
  }

  .icon-parties {
    margin: 0 0 0 -4px;
  }

  .icon-title {
    font-size: x-large;
  }

  @media screen and (min-width: 40em) {
    .shadowed {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    }

    .rounded {
      border-radius: 4px;
    }

    .games-tile {
      background-color: #ffffff;
      z-index: 6;
      position: relative;
      margin-top: -4em;
    }

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

    .medium-9 {
      width: 75%;
    }

    .medium-6 {
      width: 45%;
    }

    .medium-4 {
      width: 33.33333%;
    }

    .medium-centered, .medium-centered:last-child:not(:first-child) {
      float: none;
      clear: both;
    }
  }

  /* pop up */
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }

  .overlay:target {
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }

  .popup {
    margin: 25px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
  }

  .popup h2 {
    margin-top: 0;
    color: #333;
    font-family: Tahoma, Arial, sans-serif;
  }

  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

  .popup .close:hover {
    color: black;
  }

  .popup .content {
    max-height: 30%;
    overflow: auto;
  }
</style>
