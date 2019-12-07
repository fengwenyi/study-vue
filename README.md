# study-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## VueRouter使用步骤

[Vue Router](https://router.vuejs.org/zh/)

1、安装

```
npm install vue-router
```

2、创建 `router.js`

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }
    ]
})
```

3、在 `main.js` 中引入

```js
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

4、`App.js`

```
<transition name="fade">
  <router-view></router-view>
</transition>
```

## 学习 Flex 布局

## less

[Vue Loader](https://vue-loader.vuejs.org/zh/)

```
npm install -D less less-loader
```
