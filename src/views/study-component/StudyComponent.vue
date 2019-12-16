<template>
    <div>

        <h1>学习自定义组件</h1>
        <h3>{{ formData.subtitle }}</h3>

        <div>

            <h3>父组件</h3>

        </div>
        <div>
            <v-custom-component :form="formData" :msg="message" :mSay="say" :_this="this" @func="getMsgFormSon"
                                dataFiled="subtitle"/>
        </div>

    </div>
</template>

<script>
    import CustomComponent from "./CustomComponent";

    export default {
        name: "StudyComponent",
        data() {
            return {
                message: '测试内容',
                msgFormSon: "this is msg",
                formData: {
                    subtitle: ''
                }
            }
        },
        components: {
            'v-custom-component': CustomComponent
        },
        methods: {
            say(what) {
                alert('说：' + what);
            },
            componentName() {
                alert("子组件")
            },
            getMsgFormSon(data) {
                this.msgFormSon = data
                window.console.log(this.msgFormSon)
            }
        }
    }
</script>

<style scoped>
    body {
        background-color: #fff;
        color: #eee;
    }
</style>
