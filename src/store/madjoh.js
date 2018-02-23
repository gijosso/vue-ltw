const state = {
  id: '',
  deviceId: '',
  token: ''
};

const mutations = {
  saveMadjohIdentificationParameters(state, payload) {
    state.id = payload.id;
    state.deviceId = payload.deviceId;
    state.token = payload.token
  }
};

export default {
  state,
  mutations
};
