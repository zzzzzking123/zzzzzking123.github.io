<template>
    <div>
        <h1>
            注册成功！
        </h1>
        <div>
            <button @click="goLoading">点击登录</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goLoading(){
        this.$router.push('/Loading');
    }
    }
}
</script>