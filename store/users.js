const state = () => ({
  users: [{id: null, name: null, roles: []},]
})

const getters = {
  getUsers(state) {
    return state.users
  },
}

const mutations = {
  SET_USERS(state, data) {
    state.users = data
  }
}

const actions = {
  async get_users_from_api({commit}) {
    await this.$axios.get('http://localhost:8000/api/users/all').then((res) => {
      console.log("====>" , res.data.data)
      commit('SET_USERS', res.data.data)
    })
  },

}

export default {
  state, getters, actions, mutations
}
