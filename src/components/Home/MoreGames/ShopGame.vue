<template>
  <div class="game-framework">
    <div style="width: 45%; margin: 0 2em 0 0;">
      <div class="logo locked" v-bind:style="gameStatsStyle"></div>
    </div>
    <div style="width: 55%;">
      <div class="game-stat">
        <!-- FIXME: waiting for route on backend to replace props with call to store -->
        <h2 class="important" style="color: white;">{{ game.name }}</h2>
        <h3 style="color: #ff6464;">Price: {{ game.price }} coins</h3>
        <h3 style="color: white;">Difficulty: {{ game.difficulty }}/5</h3>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GameStat',
    props: ['game'],
    data() {
      return {
        gameStatsStyle: {
          background: "url('/static/assets/app_logo/" + this.game.name + ".png') no-repeat 100%",
          "background-size": "cover"
        }
      }
    },
    components: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .game-framework {
    display: flex;
    margin-bottom: 2em;
  }

  .logo {
    border: 1px solid #0000003b;
    border-radius: 10px;
    width: auto;
    height: 100%;
    margin-right: 1em;
    background-size: cover;
  }

  .locked {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .important {
    font-weight: bolder;
  }
</style>
