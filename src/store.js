import Vue from 'vue'
import Vuex from 'vuex'
import marked from 'marked'
import markedRenderer from '../utils/markedRenderer'

Vue.use(Vuex)

export default ({fetchPrefix, title}) => {
  const store = new Vuex.Store({
    state: {
      title,
      page: {
        title: '',
        html: ''
      }
    },

    mutations: {
      SET_PAGE(state, page) {
        state.page = page
      }
    },

    actions: {
      fetchFile({ commit }, path) {
        fetch(`${fetchPrefix || ''}${
          path.endsWith('/') ? `${path}readme` : path
        }.md`)
          .then(r => r.text())
          .then(md => {
            const page = {}
            page.html = marked(md, {
              renderer: markedRenderer(page)
            })
            commit('SET_PAGE', page)
          })
      }
    }
  })

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  return store
}
