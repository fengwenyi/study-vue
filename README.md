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

## 学习父子组件传值

#### 方式一：

父组件将 `this` 传给子组件，子组件通过 `this` 调用父组件的方法，将值传给父组件

父组件：

```
<v-custom-component :_this="this"/>
```

```
say(what) {
    alert('说：' + what);
},
```

子组件：

```
props: [
    "_this"
]
```

```
this._this.say('这是来自子组件的消息')
```



#### 方式二：

父组件将方法传给子组件，子组件通过 `$emit` 进行调用

父组件：

```
<v-custom-component @func="getMsgFormSon" />
```

```
getMsgFormSon(data) {
    this.msgFormSon = data
    window.console.log(this.msgFormSon)
}
```

子组件：

```
this.$emit('func', '子组件给父组件传值')
```


#### 方式三：

父组件将参数绑定到子组件上，从而将参数的值进行改变

父组件：

```
<v-custom-component :form="formData" dataFiled="subtitle"/>
```

子组件：

```
props: [
    'dataFiled',
    'form'
]
```

```
this.form[this.dataFiled] = '这是子组件传出去的副标题'
```


