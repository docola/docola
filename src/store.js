/* global window, fetch */

import Vue from 'vue'
import Vuex from 'vuex'
import marked from 'marked'
import markedRenderer from '../utils/marked/Renderer'

Vue.use(Vuex)

export default ({
  fetchPrefix,
  title = 'Docola',
  sidebar = [],
  nav = []
}) => {
  const store = new Vuex.Store({
    state: {
      title,
      page: {
        title: null,
        html: '',
        headings: []
      },
      sidebar,
      nav,
      mobileSidebar: {
        active: false
      }
    },

    mutations: {
      SET_TITLE(state, title) {
        state.title = title
      },

      SET_PAGE(state, page) {
        state.page = page
      },

      TOGGLE_SIDEBAR({ mobileSidebar }, val) {
        mobileSidebar.active = typeof val === 'boolean' ? val : !mobileSidebar.active
      }
    },

    actions: {
      fetchFile({ commit }, path) {
        fetch(
          `${fetchPrefix || ''}${
            path.endsWith('/') ? `${path}readme` : path
          }.md`
        )
          .then(r => r.text())
          .then(md => {
            const page = {}
            page.headings = []
            page.html = marked(md, {
              renderer: markedRenderer(page)
            })
            page.title = page.headings[0]
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
