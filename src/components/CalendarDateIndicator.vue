<template>
  <div class="calendar-date-indicator">
    <span class="presentMonthYear">
      {{ selectedMonth }}
    </span>
    <span class="timeSheetStatus" data-toggle="tooltip" data-placement="right" title="Validated by : RAJAN Gowrisankar">
      <i class="fas fa-check-circle timesheetValidated"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    },
  },
};
</script>

<style scoped>
.calendar-date-indicator {
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
}

.timesheetValidated {
  margin-left: 10px;
  color: #26a65b;
}
</style>

