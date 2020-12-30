<template>
  <div class="all">
    <div class="table">
      <div class="zhuce" align="center">新用户注册</div>
      <div class="buttons" >
		  <div class="inp">
			  用户名或手机号：<el-input placeholder="请输入用户名/手机号" v-model="input1" ></el-input><br /><br />
			  邮箱：<el-input placeholder="请输入邮箱" v-model="input3" ></el-input><br /><br />
       		  密码：<el-input placeholder="请输入密码" v-model="input4" show-password></el-input><br /><br />
		  </div>
			<button @click="back" class="btn1">取消</button>
			<button @click="register" >点击注册</button>

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
		input3: '',
		input4: ''
      }
    },
  methods: {
	  register(){
		  let input ={
			  username:this.input1,
			  email:this.input3,
			  password:this.input4
		  }
		  if(this.input1=='' || this.input3=='' || this.input1=='' || this.input4=='')
		  {
			  alert('请输入正确格式');
		  }
		 else{
			 localStorage.setItem("login",JSON.stringify(input));
			console.log(input);
			this.$router.push('/Alert');
		 }
			
		  
		  
	  },
	  back(){
		  this.$router.push('/');
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
	width: 500px;
	height: 400px;
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
	margin-top: 80px;
	float: right;
}
</style>