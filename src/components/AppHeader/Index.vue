<template>
  <header class="header">
    <div class="top-bar hide-for-small-only" id="main-menu">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-title"><a href="/">LearnTheWorld</a></li>
          <li><a href="#serious-gaming">Serious Gaming</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="https://www.apple.com/fr/ios/app-store/">Download &#8595;</a></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul style="margin-top: 12px;list-style-type: none;">
          <li><a class="button" href="#popup" style="margin-right: 15px; color: white;">Sign in &#128506;</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from './Logo.vue'
  import NavElement from './NavElement.vue'

  export default {
    name: 'header',
    data() {
      return {}
    },
    computed: {
      app_name() {
        return this.$store.state.app_name
      }
    },
    components: {
      Logo,
      NavElement
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .menu > li > a:before {
    align-content: center;
    content: "";
    position: absolute;
    margin-top: -50px;
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

  .menu > li > a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .top-bar .menu-title a {
    text-transform: none;
    margin-top: 0;
    text-decoration: none;
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .top-bar .menu-title a:hover {
    color: #ffbb56;
    text-shadow: 1px 0 0 #ffbb56;
    text-decoration: none;
  }

  .menu-title > a:before {
    background-color: #ffbb56;
  }

  .top-bar .top-bar-right {
    line-height: 1.6em;
  }
</style>
