<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
      weekend: isWeekend,
    }"
  >
    <span class="timeofDay AM">P1</span>
    <span class="timeofDay PM">P2</span>
    <span class="day">{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true,
    },

    isCurrentMonth: {
      type: Boolean,
      default: false,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
    isWeekend() {
      let day = dayjs(this.day.date).format("dddd");
      let isweekend = day == "Saturday" || day == "Sunday" ? true : false;
      return isweekend;
    },
  },
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: calc(1.5vw + 104px);
  font-size: 16px;
  background-color: hsl(180, 8%, 98%);
  color: var(--grey-800);
  padding: 5px;
  border: 1px solid #d6dadb;
}

.PM {
  position: absolute;
  top: 50%;
  left: 0%;
}

.AM {
  position: absolute;
  top: 0%;
  left: 0%;
}

.calendar-day.weekend {
  background-color: #e4e6e7;
}

.calendar-day > span.day {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
  font-weight: bold;
  color: #465053;
}

.calendar-day--not-current {
  color: var(--grey-300);
}

.calendar-day--not-current > span {
  color: #d6dadb !important;
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > .day {
  color: #3498db;
  border-radius: 9999px;
  font-weight: bold;
}

.timeofDay {
  background-color: #26a65b;
  height: 50%;
  width: 32px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  border-right: 3px solid #d6dadb;
}

.calendar-day--not-current > .timeofDay {
  display: none;
}
</style>
