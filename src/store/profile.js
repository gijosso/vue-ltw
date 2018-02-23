const userStats = [
  // game 1
  {
    game_name: 'History MCQ',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  },
  // game 2
  {
    game_name: 'Sail',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  },
  // game 3
  {
    game_name: 'Find on Map',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  },
  // game 4
  {
    game_name: 'PicFind',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  },
  // game 5
  {
    game_name: 'Capitals',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  },
  // game 6
  {
    game_name: 'Travel The World',
    game_price: 0,
    game_time: 0,
    game_score: 0,
    game_rounds: 0
  }
];

const state = {
  lastname: '',
  firstname: '',
  phone_number: '',
  slug: '',
  mail: '',
  coins: 100,
  verified_mail: 1,
  id: '',
  app_slug: '',
  user_id: '',
  username: '',
  account_status: 0,
  premium_currency: 0,
  xp: 0,
  best_score: 0,
  nb_notifications: 0,
  disabled_notifications: [],
  language: '',
  last_free_chest: '',
  createdAt: '',
  updatedAt: '',
  not_seen: 0,
  disabled: [],
  hard_language: false,
  status: 0,
  friendship_friends: 0,
  friendship_added: 0,
  friendship_added_me: 0,
  stats: userStats
};

const mutations = {
  updateProfile(state, payload) {
    state.lastname = payload.lastname,
    state.firstname = payload.firstname,
    state.phone_number = payload.phone_number,
    state.slug = payload.slug,
    state.mail = payload.mail,
    state.coins = payload.coins,
    state.verified_mail = payload.verified_mail,
    state.id = payload.id,
    state.app_slug = payload.app_slug,
    state.user_id = payload.user_id,
    state.username = payload.username,
    state.account_status = payload.account_status,
    state.premium_currency = payload.premium_currency,
    state.xp = payload.xp,
    state.best_score = payload.best_score,
    state.nb_notifications = payload.nb_notifications,
    state.disabled_notifications = payload.disabled_notifications,
    state.language = payload.language,
    state.last_free_chest = payload.last_free_chest,
    state.createdAt = payload.createdAt,
    state.updatedAt = payload.updatedAt,
    state.not_seen = payload.not_seen,
    state.disabled = payload.disabled,
    state.hard_language = payload.hard_language,
    state.status = payload.status,
    state.friendship_friends = payload.friendship_friends,
    state.friendship_added = payload.friendship_added,
    state.friendship_added_me = payload.friendship_added_me
  },
  updateStats(state, payload) {
    // game 1
    state.stats[0].game_name = payload.game1_name,
    state.stats[0].game_price = payload.game1_price,
    state.stats[0].game_time = payload.game1_time,
    state.stats[0].game_score = payload.game1_score,
    state.stats[0].game_rounds = payload.game1_rounds,
    // game 2
    state.stats[1].game_name = payload.game2_name,
    state.stats[1].game_price = payload.game2_price,
    state.stats[1].game_time = payload.game2_time,
    state.stats[1].game_score = payload.game2_score,
    state.stats[1].game_rounds = payload.game2_rounds,
    // game 3
    state.stats[2].game_name = payload.game3_name,
    state.stats[2].game_price = payload.game3_price,
    state.stats[2].game_time = payload.game3_time,
    state.stats[2].game_score = payload.game3_score,
    state.stats[2].game_rounds = payload.game3_rounds,
    // game 4
    state.stats[3].game_name = payload.game4_name,
    state.stats[3].game_price = payload.game4_price,
    state.stats[3].game_time = payload.game4_time,
    state.stats[3].game_score = payload.game4_score,
    state.stats[3].game_rounds = payload.game4_rounds,
    // game 5
    state.stats[4].game_name = payload.game5_name,
    state.stats[4].game_price = payload.game5_price,
    state.stats[4].game_time = payload.game5_time,
    state.stats[4].game_score = payload.game5_score,
    state.stats[4].game_rounds = payload.game5_rounds
    // game 6
    state.stats[5].game_name = payload.game6_name,
    state.stats[5].game_price = payload.game6_price,
    state.stats[5].game_time = payload.game6_time,
    state.stats[5].game_score = payload.game6_score,
    state.stats[5].game_rounds = payload.game6_rounds
  }
};

export default {
  state,
  mutations
}
