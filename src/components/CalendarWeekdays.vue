<template>
  <ol class="day-of-week-container">
    <li class="day-of-week" v-for="weekday in weekdays" :key="weekday">
      {{ weekday }}
    </li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "CalendarWeekdays",

  computed: {
    weekdays() {
      return WEEKDAYS;
    },
  },
};
</script>

<style scoped>
.day-of-week-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week {
  color: #465053;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}
</style>
