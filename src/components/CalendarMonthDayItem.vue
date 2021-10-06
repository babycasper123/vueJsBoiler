<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
      'weekend': isWeekend
    }"
  >
    <span>{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
    isWeekend(){
      let day = dayjs(this.day.date).format("dddd");
      let isweekend = day == 'Saturday' || day == 'Sunday' ? true : false;
      return isweekend;
    }
  }
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 5px;
  border: 1px solid #d6dadb;
}

.calendar-day.weekend{
  background-color: #eff8ff;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}

.calendar-day--not-current {
  color: var(--grey-300);
}

.calendar-day--not-current > span {
  color: #d6dadb;
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
    color: #3498db;
    border-radius: 9999px;
    font-weight: bold;
}
</style>
