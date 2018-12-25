export default {
  name: 'DocolaRoot',
  render: h =>
    h(
      'div', {
        attrs: {
          id: 'Docola'
        }
      },
      [
        h('router-view')
      ]
    )
}

import 'milligram/src/milligram.sass'
import '@/css/global.css'
