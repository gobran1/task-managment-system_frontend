import Vuex from 'vuex'
import projects from "./projects"
import tasks from './tasks'
import auth from './auth'

const vuexStore = () => {
  return new Vuex.Store({
      state: {},
      getters: {},
      mutations: {},
      actions: {},
      modules: {
        projects,
        tasks,
        auth,
      }
    }
  )
}
export default vuexStore
