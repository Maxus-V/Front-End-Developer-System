import { createStore } from 'vuex'
import { xorWith } from 'lodash-es';

const store = createStore({
    state () {
      return {
        _is7days: true,
        refresh: {
          charger: false,
          rate: 30
        },
        title: '概览',
      }
    },
    getters: {
        isRecent7days() {
          return store.state._is7days
        },
        refreshRate() {
          const { charger, rate} = store.state.refresh
          return charger? rate: charger
        },
        getTitle() {
          return store.title
        }
    },
    mutations: {
      changeTimeSet (state, num) {
        state._is7days = num == 7 ? true : false
      },
      setRefreshCharger(state, value) {
        state.refresh.charger = value
      },
      setRefreshRate(state, value) {
        state.refresh.rate = value
      },
      changeTitle(state, value) {
        console.log('hi', value)
        state.title = value
      }
    },
    modules: {
      useTree: {
        namespaced: true, 
        state () {
          return {
            initialState: {
              expendKeys: [],
              checkedKeys: [],
              initData: []
            }
          }
        },
        mutations: {
          onExpand (payload) {
            const {expendKeys} = state.initialState
            const keys = expendKeys.map(i => i.id)
            state.initialState.expendKeys = keys.includes(payload.id) ? expendKeys.filter(i => i.id !== payload.id) : expendKeys.concat(payload)
          },
          onSelect (payload) {
            const {checkedKeys} = state.initialState
            state.initialState.checkedKeys = xorWith(checkedKeys, payload, (a, b) => a.id === b.id)
          }
        }
      }
    }
})

export default store