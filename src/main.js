// Import global assets
import './assets/styles/global.scss'

// Import vue components
import * as components from './components'

// Import SbModal Plugin
import createModalPlugin from './components/Modal/plugin/create-modal-plugin'

// Create module definition for Vue.use()
const BlokInkPlugin = {
  installed: false,

  install(Vue) {
    if (this.installed) return

    this.installed = true
    for (const key in components) {
      Vue.component(key, components[key])
    }

    Vue.prototype.$sb = {
      // modal will be available in this.$sb.modal(options)
      modal: createModalPlugin,
    }
  },
}

// Auto-install when vue is found
let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(BlokInkPlugin)
}

// Exporting components
export * from './components'

// Exporting the plugin definition to Vue.use
export default BlokInkPlugin
