<template>
  <div class="container-fluid">
    <!--Row with two equal columns-->
    <div class="row">
      <div class="col-md-12"><navbar></navbar></div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <CalendarMonth />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar/navbar";
import CalendarMonth from "../components/CalendarMonth";
export default {
  name: "homePage",
  components: {
    navbar,
    CalendarMonth,
  },
};
</script>

<style>
ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}
</style>
