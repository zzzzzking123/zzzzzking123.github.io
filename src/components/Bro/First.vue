<template>
    <div>
        <Top></Top>
        <Content></Content>
        <Tody></Tody>
        <Market></Market>
        <Bottom></Bottom>
  </div>
</template>

<script>
import Content from "@/components/Content";
import Market from "@/components/Market";
import Tody from "@/components/Tody";
import Top from "@/components/Top.vue"
import Bottom from "@/components/Bottom";

export default {
  name: "First",
  components: {
    Content,
    Market,
    Tody,
    Top,
    Bottom,
  },
};
</script>

<style>
a{
  text-decoration: none;
}
</style>
