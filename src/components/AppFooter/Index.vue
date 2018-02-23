<template>
    <div class="footer">
      <div style="height: 4em;"></div>
      <div class="row">
        <div class="medium-11 medium-centered columns">
          <div class="row">
            <div class="medium-3 small-6 columns margin-bottom">
              <h5>Products</h5>
              <ul class="no-bullet">
                <li><a href="#serious-gaming">Serious gaming</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="https://www.apple.com/fr/ios/app-store/">Download</a></li>
              </ul>
            </div>
            <div class="medium-3 small-6 columns margin-bottom">
              <h5>Resources</h5>
              <ul class="no-bullet">
                <li><a href="">Documentation</a></li>
                <li><a href="">API Reference</a></li>
                <li><a href="">Libraries</a></li>
                <li><a href="">GitHub</a></li>
              </ul>
            </div>
            <div class="medium-3 small-6 columns">
              <h5>Company</h5>
              <ul class="no-bullet">
                <li><a href="">About</a></li>
                <li><a href="">Flight journal</a></li>
                <li><a href="">Press Inquiries</a></li>
                <li><a href="">Careers</a></li>
              </ul>
            </div>
            <div class="medium-3 small-6 columns">
              <h5>Legal & Compliance</h5>
              <ul class="no-bullet">
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Security</a></li>
                <li><a href="">Service Status</a></li>
              </ul>
            </div>
          </div>


          <div class="row margin-bottom" style="color: white; opacity: 0.7; font-size: 0.8em;">
            <div class="large-12 columns">

            </div>
          </div>


          <div class="row">
            <div class="medium-6 columns copyright text-right">
              <a href="/">&copy; JoBoBaGr 2017. All rights reserved.</a>
            </div>
          </div>

          <div class="margin-bottom"></div>
        </div>
      </div>
    </div>
</template>


<script>
  export default {
    name: 'footer',
    data() {
      return {}
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
  .footer {
    background: linear-gradient(170deg, #3d69c5, #39a3c6 105%, #5abfdf);
  }

  .row::after {
    clear: both;
  }

  .row::before, .row::after {
    content: ' ';
    display: table;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .row {
    max-width: 75em;
    margin-left: auto;
    margin-right: auto;
  }

  .margin-bottom {
    margin-bottom: 1em;
  }

  .no-bullet {
    margin-left: 0;
    list-style: none;
  }

  .no-bullet > li > a, .copyright > a {
    color: white;
  }

  @media screen and (min-width: 40em) {
    .columns {
      width: 100%;
      float: left;

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

    .medium-3 {
      width: 25%;
    }

    .small-6 {
      /* width: 50%; */
    }

    .row .row {
      margin-left: -0.9375rem;
      margin-right: -0.9375rem;
    }
  }

  @media screen and (min-width: 64em) {
    .large-12 {
      width: 100%;
    }
  }
</style>
