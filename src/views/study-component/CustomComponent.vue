<template>
    <div>
        <h13>子组件</h13>

        {{ msg }}

        <br>
        <button @click="mSay('Hello World')">执行父组件的方法</button>
        <br>
        <button @click="getParent()">获取父组件的数据和方法</button>

        <br>
        <input @click="sendMsg" type="button" value="给父组件传递值">
        <br>
        <button @click="handleSubtitle">副标题</button>
    </div>
</template>

<script>
    export default {
        name: "CustomComponent",
        props: [
            "msg",
            "mSay",
            "_this",
            'dataFiled',
            'form'
        ],
        methods: {
            componentName() {
                alert("父组件")
            },
            getParent() {
                this._this.componentName()
            },
            sendMsg(){
                //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
                this.$emit('func', '子组件给父组件传值')
            },
            handleSubtitle() {
                this.form[this.dataFiled] = '这是子组件传出去的副标题'
            }
        }
    }
</script>

<style scoped>

</style>
