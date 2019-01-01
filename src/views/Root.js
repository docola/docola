import '@/css/milligram/milligram.sass'
import '@/css/global.css'

export default {
  name: 'DocolaRoot',
  render(h) {
    return h(
      'div',
      {
        attrs: {
          id: this.$store.getters.el
        }
      },
      [h('router-view')]
    )
  }
}
