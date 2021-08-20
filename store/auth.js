export default {
  state: {},
  getters: {},
  mutations: {
    LOGIN(state,token){
      //record login user
    }
  },
  actions: {
    async login({commit}, user) {
      try {
        let {data} = await this.$mutation("login", user)
      }
      catch (e) {
        this.$toast.error(e.data.response.data)
      }
    }
  },
}
