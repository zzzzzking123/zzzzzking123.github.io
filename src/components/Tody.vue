<template>
    <div id="Today">
        <div class="Tody">
          <!-- 今日推荐部分 -->
          <div class="Tody1">
            <p class="TitleShow">今日推荐</p>
            <img
              src="../assets/today3.jpg"
              width="200px"
              height="300px"
              alt=""
            />
          </div>
          <div class="Tody2">
            <p class="TitleShow">聚名品 LUXURY CHANNEL</p>
            <img
              src="../assets/today1.jpg"
              width="480px"
              height="300px"
              alt=""
            />
          </div>
          <div class="Tody2">
            <p class="TitleShow">品牌活动 BRAND ACTIVITY</p>
            <img
              src="../assets/today2.jpg"
              width="480px"
              height="300px"
              alt=""
            />
          </div>
        </div>
        <!--logo部分-->
         <div><img src="../assets/pp.png" width="1200px" alt="" /></div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
#Today{
  width: 1215px;
  margin: 0 auto;
  padding: 0;
}
.Tody {
  text-align: left;
  padding: 15px;
}
.Tody1 {
  float: left;
  border: 1px solid #ccc;
}
.Tody2 {
  float: left;
  border: 1px solid #ccc;
  margin-left: 5px;
}
.TitleShow {
  line-height: 40px;
  font-weight: bold;
  font-size: 7;
}
</style>>