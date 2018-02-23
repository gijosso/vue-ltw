<template>
  <div class="row hero">
    <div class="large-10 medium-11 medium-centered columns">
      <div class="header margin-bottom">
        <h1><span class="important">Play</span> & <span class="important">Learn (TheWorld)</span></h1>
        <h3>A serious gaming experience</h3>
      </div>
      <div class="big-margin-bottom row">
        <div class="medium-4 columns">
          <h4 class="opacity0-9 white">Play right now and earn points</h4>
          <h4 class="opacity0-9 white">Unlock new games</h4>
          <h4 class="opacity0-9 white">Create an account and check your stats!</h4>
        </div>
        <div class="medium-4 columns text-right hide-for-small-only" style="margin-top: 2.5em;">
          <a href="#serious-gaming" class="big white border rounded button main">Serious gaming?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ShortDescription',
    data() {
      return {}
    },
    components: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .white {
    color: white;
  }

  .huge-margin-bottom {
    margin-bottom: 5em;
  }

  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .row .row {
    margin-left: -0.625rem;
    margin-right: -0.625rem;
  }

  .big-margin-bottom {
    margin-bottom: 6.5em;
  }

  .row::after {
    clear: both;
  }

  .row::before, .row::after {
    content: ' ';
    display: table;
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

  .important {
    font-weight: bolder;
    text-shadow: #c39040 1px 0 0;
  }

  @media screen and (min-width: 40em) {
    .columns {
      width: 100%;
      float: left;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .row .row {
      margin-left: -0.9375rem;
      margin-right: -0.9375rem;
    }

    .medium-centered {
      float: none;
      clear: both;
    }

    .medium-centered {
      margin-left: auto;
      margin-right: auto;
    }

    .medium-8 {
      width: 66.66667%;
    }

    .medium-4 {
      width: auto;
    }

    .medium-11 {
      width: 85%;
    }
  }
</style>
