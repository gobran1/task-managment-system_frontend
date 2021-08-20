export default {
  state: {
    projects: [],
    project: null
  },
  getters: {
    getProjects(state) {
      return state.projects
    },
    getProject(state) {
      return state.project
    },
  },
  mutations: {
    FETCH_ALL_PROJECTS(state, projects) {
      state.projects = projects
    },
    FETCH_PROJECT(state, project) {
      state.project = project
    }
  },
  actions: {
    fetchAllProjects({commit}) {
      this.$query('fetchAllProjects').then(res => {
        commit("FETCH_ALL_PROJECTS", res.data.data.projects)
      })
    },
    fetchProject({commit}, projectId) {
      this.$query('fetchProject', {projectId: parseInt(projectId)})
        .then(res => {
          commit('FETCH_PROJECT', res.data.data.projects[0])
          commit('SET_PROJECT_TASKS', res.data.data.projects[0].tasks)
          commit('SET_PROJECT_TEAM', res.data.data.projects[0].team)
        })
    }
  },
}
