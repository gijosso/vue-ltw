<template>
  <div class="columns">
    <a class="user-name" href="#profile-info" data-toggle="collapse">
      <h2 class="title">{{ getUserName }} <span class="title-icon">&#8675;</span></h2>

    </a>
    <div class="row collapse" id="profile-info">
      <ul class="medium-6 columns no-decoration">
        <li v-for="(value, key, index) in getUserShowcaseData" v-if="index < 3"><p>{{ key }}: {{ value }}</p></li>
      </ul>
      <ul class="medium-6 columns no-decoration">
        <li v-for="(value, key, index) in getUserShowcaseData" v-if="index >= 3 && key != 'Stats'"><p>{{ key }}: {{ value }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'showcase',
    components: {},
    data() {
      return {}
    },
    computed: {
      getCredit() {
        return this.$store.state.profile.coins
      },
      getUserName() {
        const userName = this.$store.state.profile.firstname + ' ' + this.$store.state.profile.lastname;
        return userName === ' ' ? 'User' : userName
      },
      getUserShowcaseData() {
        const profile = this.$store.state.profile;
        // choose here what you want to display (cf. store/profile.js)
        profile.language = 'English';
        const output = {};
        for (const key in profile) {
          if (key !== 'coins' && key !== 'verified_mail' && key !== 'id' && key !== 'app_slug' && key !== 'user_id' && key !== 'username' && key !== 'account_status' &&
            key !== 'premium_currency' && key !== 'xp' && key !== 'best_score' && key !== 'nb_notifications' && key !== 'disabled_notifications' &&
            key !== 'last_free_chest' &&
            key !== 'createdAt' && key !== 'updatedAt' && key !== 'not_seen' && key !== 'disabled' && key !== 'hard_language' && key !== 'status' &&
            key !== 'friendship_friends' && key !== 'friendship_added' && key !== 'friendship_added_me') {

            // setting keys for display pruposes
            var displayable_key = '';
            if (key === 'phone_number')
              displayable_key = 'Phone number';
            else
            // making initials uppercase letters
              displayable_key = key.replace(key[0], key[0].toUpperCase());
            output[displayable_key] = profile[key]
          }
        }
        return output
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

  .no-decoration {
    list-style: none;
  }

  /*topbar*/
  ul {
    list-style-type: disc;
    margin-left: 1.25rem;
    line-height: 1.6;
    margin-bottom: 1rem;
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
    text-decoration: underline;
  }

  .top-bar li a:before {
    content: "";
    position: absolute;
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

  .top-bar li a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .top-bar .menu-title a {
    text-transform: none;
    margin-top: 0;
    text-decoration: none;
  }

  .top-bar .menu-title a:hover {
    color: #ffbb56;
    text-shadow: 1px 0 0 #ffbb56;
    text-decoration: none;
  }

  /* hero */
  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .hero .header h1 {
    font-size: 3.5em;
    margin-bottom: 0;
  }

  .row {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
  }

  .columns:last-child:not(:first-child) {
    float: right;
  }

  .user-name {
    text-decoration: none;
  }

  .title {
    -webkit-transition: all 0.3s linear !important;
    -moz-transition: all 0.3s linear !important;
    -o-transition: all 0.3s linear !important;
    -ms-transition: all 0.3s linear !important;
    transition: all 0.3s linear !important;
  }

  .title:hover {
    color: white;
  }

  .title-icon {
    /*float: right;*/
  }

  @media screen and (min-width: 40em) {
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

    .medium-6 {
      width: 45%;
    }
  }
</style>
