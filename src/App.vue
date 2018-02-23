<template>
  <div id="app">
    <router-view></router-view>
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
  import AppFooter from './components/AppFooter/Index.vue'
  import AppHeader from './components/AppHeader/Index.vue'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      AppFooter,
      AppHeader
    }
  }
</script>

<style>
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  html {
    /*background: url('/static/assets/background.jpg') no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;*/
    scroll-behavior: smooth;
  }

  #app {
    font-family: "Sero Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;
    display: flex;
    flex-direction: column;*/
  }

  /*section {
    display: flex;
    flex-direction: column;
    background-color: #2A86AAAA;
    padding-bottom: 5%;
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 0;
    width: 100%;
    min-height: 100%;
  }*/

  h1, h2, h3, h4, h5, h6 {
    font-family: "Sero Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
    color: #ffbb56;
    text-rendering: optimizeLegibility;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .button {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1em 2em;
    font-weight: bold;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 5px 8px 0 rgba(0, 0, 0, 0.1);
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    background: transparent;
    border: 1px solid white;
    line-height: 1em;
    -moz-border-radius: 0.4em;
    -webkit-border-radius: 0.4em;
    border-radius: 0.4em;
  }

  .button:hover {
    text-decoration: none !important;
    background-color: white;
    color: #ffbb56 !important;
  }

  button {
    text-transform: uppercase;
    padding: 1em 2em;
    font-weight: bold;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 5px 8px 0 rgba(0, 0, 0, 0.1);
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  button:hover {
    background-color: #b95d0e;
  }

  button:active {
    position: relative;
    top: 1px;
  }

  button:focus {
    outline: 0;
  }

  button:disabled {
    background: #aaaaaa;
    border: 1px solid #888888;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

</style>
