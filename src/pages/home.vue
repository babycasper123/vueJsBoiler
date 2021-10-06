<template>
  <div class="container-fluid">
    <!--Row with two equal columns-->
    <div class="row">
        <div class="col-md-12"><navbar></navbar></div>
    </div>
</div>
</template>

<script>
import navbar from "../components/navbar/navbar";
export default {
  name: "homePage",
  components: {
     navbar
  },
};
</script>

<style></style>
