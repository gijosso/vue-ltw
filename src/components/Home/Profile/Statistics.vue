<template>
  <div id="games" style="margin-bottom: 2em;">
    <div class="row">
      <div class="large-12 columns text-center" style="margin-bottom: 3em;">
        <h2>Your games</h2>
      </div>
    </div>
    <div class="row margin-bottom">
      <div class="medium-6 columns">
        <div class="row">
          <div class="small-3 columns">
            <ul class="game-stats">
              <li
                is="GameStat"
                v-for="gameStat in gameStats"
                v-if="gameStat.game_name !== 'Sail'"
                :key="gameStat.id"
                :stats="gameStat"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import GameStat from './GameStat.vue'

  export default {
    name: 'statistics',
    components: {GameStat},
    computed: {
      gameStats() {
        return this.$store.state.profile.stats
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

  .row .row {
    margin-left: -0.625rem;
    margin-right: -0.625rem;
  }
</style>
