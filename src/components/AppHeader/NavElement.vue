<template>
  <li class="nav-element">
    <a v-bind:href="''+location+''" class="nav-link">
      <div class="nav-content">
        {{ text }}
      </div>
    </a>
  </li>
</template>


<script>
  export default {
    name: 'navelement',
    data() {
      return {}
    },
    props: {
      text: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      }
    },
    computed: {
      app_name() {
        return this.$store.state.app_name
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-element {
    display: table-cell;
    height: 100%;
    position: relative;
    vertical-align: middle;
    padding: 0 10px;
  }

  .nav-element > .nav-link {
    text-transform: uppercase;
    color: #000000;
    position: relative;
    text-decoration: none;
    font-weight: normal;
    transition: all 0.3s ease-in-out 0s;
  }

  .nav-element > .nav-link:hover {
    /*color: black;*/
  }

  .nav-element > .nav-link:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF9D0D;;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .nav-element > .nav-link:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .nav-link {
    text-decoration: none;
    display: block;
  }

  .nav-content {

  }
</style>
