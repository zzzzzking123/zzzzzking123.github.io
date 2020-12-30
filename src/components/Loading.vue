<template>
  <div class="all">
    <div class="table">
      <div class="zhuce" align="center">用户登录</div>
      <div class="buttons" >
		  <div class="inp">
			  用户名：<el-input placeholder="请输入用户名/手机号" v-model="input1" ></el-input><br /><br />
       		 密码：<el-input placeholder="请输入密码" v-model="input2" show-password></el-input><br /><br />
		  </div>
			<button class="btn1" @click="back">注册</button>
			<button @click="gologin">点击登录</button>
			<p><a href="">？忘记密码</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
      data() {
      return {
		input1: '',
		input2: ''
      }
    },
  methods: {
    back() {
      this.$router.push("/Register");
	},
	
	gologin(){
		if(this.input1==='' || this.input2==='')
		{
			alert('请输入用户名或密码');
		}
		else{
			let logins = JSON.parse(localStorage.getItem("login"));
			let good;
			if(!logins){
				alert('请先注册');
			}
			else{
				console.log(logins)
				//logins.forEach((item) => {
					// console.log(item["goods_id"]);
					// console.log(this.$route.params.id);
					if (this.input1 === logins.username && this.input2 === logins.password) {
					// console.log(item);
						alert('登陆成功');
						this.$router.push('/');
					}
					else if(this.input1!== logins.username && this.input2 === logins.password){
						alert('请正确输入密码');
					}
					else
					{
						alert('用户不存在，请先注册');
					}
				//})
			}
			
		}
		
		// console.log(good);
	}


  },
};
</script>
<style scoped>
.all{
	width: 1000px;
	margin: 0 auto;
}
.table{
	width: 400px;
	height: 300px;
	border: 1px solid #000;
	float: right;
	position: relative;

}
.buttons{
	position: relative;
	margin: 15px 15px;
}
.inp{
	float: left;
}
.btn1{
	position: relative;
	margin-top: 20px;
	margin-left: 120px;
}
button{
	position: relative;
	margin: 0 20px;
}
p{
	margin-top: 20px;
	float: right;
}
</style>