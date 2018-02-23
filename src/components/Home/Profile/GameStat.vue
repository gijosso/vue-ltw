<template>
  <div class="game-framework">
    <div style="width: 45%; margin: 2em 2em 0 0;">
      <div class="logo" v-bind:style="gameStatsStyle">
      </div>
    </div>
    <div style="width: 55%;">
      <div class="game-stat">
        <h2 class="important">{{ stats.game_name }} - {{ stats.game_price }} coins</h2>
        <h3>Score: {{ stats.game_score }}</h3>
        <h3>Time played: {{ stats.game_time }}</h3>
        <h3>Rounds played: {{ stats.game_rounds }}</h3>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GameStat',
    props: ['stats'],
    data() {
      return {
      }
    },
    computed: {
      gameStatsStyle() {
        return {
          background: "url('/static/assets/app_logo/" + this.stats.game_name + ".png') no-repeat 100%",
          "background-size": "cover"
        }
      }
    }

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
    height: 92%;
    margin-right: 1em;
    background-size: cover;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .important {
    font-weight: bolder;
  }
</style>
