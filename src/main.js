import Vue from 'vue'
import App from './App.vue'

import './custom.scss'
import { 
  BootstrapVue, 
  BIcon, 
  BIconLightningFill, 
  BIconServer, 
  BIconBarChartFill, 
  BIconHeart,
  BIconHeartHalf ,
  BIconHeartFill,
  BIconTrophy,
  BIconReplyAllFill,
  BIconBullseye,
  BIconShieldShaded,
  BIconSun,
  BIconChatDotsFill,
  BIconPeopleFill,
  BIconBuilding,
  BIconOutlet,
  BIconSearch
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconLightningFill', BIconLightningFill)
Vue.component('BIconServer', BIconServer)
Vue.component('BIconBarChartFill', BIconBarChartFill)
Vue.component('BIconHeart', BIconHeart)
Vue.component('BIconHeartHalf', BIconHeartHalf)
Vue.component('BIconHeartFill', BIconHeartFill)
Vue.component('BIconTrophy', BIconTrophy)
Vue.component('BIconReplyAllFill', BIconReplyAllFill)
Vue.component('BIconBullseye', BIconBullseye)
Vue.component('BIconShieldShaded', BIconShieldShaded)
Vue.component('BIconSun', BIconSun)
Vue.component('BIconChatDotsFill', BIconChatDotsFill)
Vue.component('BIconPeopleFill', BIconPeopleFill)
Vue.component('BIconBuilding', BIconBuilding)
Vue.component('BIconOutlet', BIconOutlet)
Vue.component('BIconSearch', BIconSearch)

Vue.config.productionTip = false

let store = {
  debug: false,
  state: {
    userName: String,
    apiBaseUrl: 'https://dragonsofmugloar.com/api/v2/',

    urlParams: {
      startGame: 'game/start',
      investigation: '/investigate/reputation',
      messages: '/messages',
      solveMessages: '/solve/',
      shop: '/shop',
      shopItems: '/shop/buy/'
    },

    gameData: null,
    gameInvestigations: null,
    gameMessages: null,
    gameSolveMessages: null,
    gameShop: null

  },

  setGameData (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.gameData = newValue
  },

  clearGameData () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.gameData = ''
  }
}

new Vue({
  data: store.state,
  render: h => h(App),
}).$mount('#app')
