import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": [
      "^pages/route/main",
      "pages/list/main",
      "pages/detail/main",

      "pages/setting/main",
    ],
    "window": {
      "backgroundTextStyle": "dark",
      "backgroundColor": "#EFEFEF",
      "navigationBarBackgroundColor": "#4287FF",
      "navigationBarTitleText": "Urban Public Transpotation",
      "navigationBarTextStyle": "white"
    },
    "tabBar": {
      "color": "#333333",
      "selectedColor": "#4287FF",
      "backgroundColor": "#FFFFFF",
      "borderStyle": "black",
      "position": "bottom",
      "list": [
        {
          "pagePath": "pages/route/main",
          "text": "Route",
          "iconPath": "static/image/tabBar/route.png",
          "selectedIconPath": "static/image/tabBar/route@active.png"
        },
        {
          "pagePath": "pages/setting/main",
          "text": "Setting",
          "iconPath": "static/image/tabBar/about.png",
          "selectedIconPath": "static/image/tabBar/about@active.png"
        }
      ]
    },
    "networkTimeout": {
      "request": 60000
    }
  }
}
