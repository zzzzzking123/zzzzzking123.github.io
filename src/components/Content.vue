<template>
  <div id="LB">
    <!--轮播-->
    <div class="lunbo">
      <div class="lunbo1">
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  }

};
</script>
<style scoped>

#LB {
  width: 1215px;
  margin: 0 auto;
  padding: 0;
  height: 420px;
}
li {
  text-decoration: none;
}
.lunbo {
  height: 420px;
  margin-left: 200px;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("../assets/ad1.jpg");
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url("../assets/ad2.jpg");
  background-size: 100% 100%;
}
.logo {
  width: 200px;
  float: left;
  height: 300px;
}
.picture{
  width: 100%;
  height: 400px;
}
</style>>