<template>
  <li
    class="calendar-day"
    :class="[
      !day.isCurrentMonth ? 'calendar-day--not-current' : '',
      isToday ? 'calendar-day--today' : '',
      isWeekend ? 'weekend' : '',
    ]"
  >
    <span
      :class="day.tsSettings ? day.tsSettings.am : ''"
      class="timeofDay AM"
      >{{ day.tsSettings == null ? "P1" : day.tsSettings.am }}</span
    >
    <span
      :class="day.tsSettings ? day.tsSettings.pm : ''"
      class="timeofDay PM"
      >{{ day.tsSettings == null ? "P2" : day.tsSettings.pm }}</span
    >
    <span class="day">{{ label }}</span>
    <span
      class="dayDescription"
      v-if="
        day.tsSettings &&
        day.tsSettings.description &&
        day.tsSettings.am == 'PHO'
      "
      >{{ day.tsSettings.description }}
    </span>
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
    tsSettings: {
      type: Object,
      default: null,
    },
    amPHO: {
      type: Boolean,
      default: false,
    },
    PHO: {
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
.calendar-day.PHO {
  background-color: #6ab04c;
}

.dayDescription {
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: #2980b9;
  font-weight: 600;
  text-transform: capitalize;
  font-family: "Raleway";
  font-size: 1.2vw;
}

.timeofDay.AM.HOL {
  color: #26a65b;
  background-color: white;
  font-weight: 500;
  border-bottom: 2px solid #26a65b;
  border-top: 2px solid #26a65b;
  border-right: 2px solid #26a65b;
  border-left: 2px solid #26a65b;
  border-radius: 2px;
}

.timeofDay.PM.HOL {
  color: #26a65b;
  background-color: white;
  font-weight: 500;
  border-right: 2px solid #26a65b;
  border-bottom: 2px solid #26a65b;
  border-left: 2px solid #26a65b;
}

.timeofDay.PHO {
  background-color: #2980b9;
  color: white;
  font-weight: 500;
}

.calendar-day {
  position: relative;
  min-height: calc(1.5vw + 104px);
  font-size: 16px;
  background-color: hsl(180, 8%, 98%);
  color: var(--grey-800);
  padding: 5px;
  border: 1px solid #d6dadb;
  margin: 2px;
  display: flex;
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
  font-size: 1.1rem;
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
  width: 2.5vw;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  border-right: 3px solid #d6dadb;
  font-size: 1vw;
  font-family: 'Raleway';
}

.calendar-day--not-current > .timeofDay {
  display: none;
}
</style>
