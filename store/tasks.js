export default {
  state: {
    tasks: [],
    team: []
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getTodoTasks(state) {
      return state.tasks.filter(item => item.statusCode == 'To Do')
    },
    getInProgressTasks(state) {
      return state.tasks.filter(item => item.statusCode == 'In Progress')
    },
    getDoneTasks(state) {
      return state.tasks.filter(item => item.statusCode == 'Done')
    },
    getInProgressTasksGroupedByUserId(state, getters) {
      let usersTasks = {}

      state.team.forEach(user => {
        usersTasks[user.id] = {}
        usersTasks[user.id].user = user
        usersTasks[user.id].tasks = [];
      })

      getters.getInProgressTasks.forEach(task => {
        usersTasks[task.user.id].tasks.push(task)
      })

      return usersTasks
    },
  },
  mutations: {
    SET_PROJECT_TASKS(state, tasks) {
      state.tasks = tasks
    },
    SET_PROJECT_TEAM(state, team) {
      state.team = team
    },
  },
  actions: {},
}
