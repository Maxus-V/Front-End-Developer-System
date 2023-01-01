import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        _is7days : true
      }
    },
    getters: {
        isRecent7days () {
          return store.state._is7days
        }
    },
    mutations: {
      changeTimeSet (state, num) {
        state._is7days = num == 7 ? true : false
      }
    }
})

export default store