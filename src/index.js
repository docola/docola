/* global window */

import Vue from 'vue'
import Root from './views/Root'
import createRouter from './router'
import createStore from './store'

/**
 * Global components
 */
import Link from './components/Link'
Vue.component(Link.name, Link)

class Docola {
  constructor(opts = {}) {
    this.opts = opts

    const router = createRouter()
    const store = createStore(opts)

    this.app = new Vue({
      el: opts.el,
      store,
      router,
      render: h => h(Root)
    })
  }
}

export default Docola

if (typeof window !== 'undefined') {
  window.Vue = Vue
}
