<template>
  <div id="unlockables">
    <div class="row">
      <div class="large-12 columns text-center" style="margin-bottom: 3em;">
        <h2 style="color: white;">Unlockables</h2>
      </div>
    </div>
    <div class="row margin-bottom">
      <div class="medium-6 columns">
        <div class="row">
          <div class="small-3 columns">
            <ul class="game-stats">
              <li
                is="ShopGame"
                v-for="shopGame in shopGames"
                :key="shopGame.id"
                :game="shopGame"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ShopGame from './ShopGame.vue'

export default {
  name: 'MoreGames',
  data () {
    return {
      shopGames: [
      {
        id: 6,
        name: 'Sail',
        price: 2500,
        difficulty: 3
      }
      ]
    }
  },
  components: {ShopGame},
  computed: {
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
