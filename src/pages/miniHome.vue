<template>
  <div class="container-fluid">
    <!--Row with two equal columns-->
    <div class="row">
      <div class="col-md-12"><navbar></navbar></div>
    </div>
    <div class="row">
      <div class="col-md-12 mt-3 shadow p-3 mb-5 bg-body rounded heroContainer">
        <div class="donutContainerMonth mb-3 mt-2 text-uppercase">
          <CalendarDateIndicator :selected-date="selectedDate" />
          <div @click="$router.push('home')" class="detailTimesheet mt-3">Timesheet in detail <i class="fas fa-location-arrow"></i></div>
        </div>
        <div class="donutContainerTimesheet">
          <VueApexCharts
            width="500"
            :type="chartOptions.type"
            :options="chartOptions"
            :series="series"
          ></VueApexCharts>
        </div>
        <div class="donutContainerButtons mt-4">
          <button type="button" class="btn btn-sm btn-block mx-2 btn-success">
            Send for validation
          </button>
          <button
            type="button"
            class="btn btn-sm btn-block mx-2 quickToolsBtn"
            data-bs-toggle="modal"
            data-bs-target="#tsSettingsDay"
          >
            Quick tools
          </button>
        </div>
      </div>
    </div>

    <daySettingsTools />
  </div>
</template>

<script>
import dayjs from "dayjs";
import navbar from "../components/navbar/navbar";
import VueApexCharts from "vue-apexcharts";
import CalendarDateIndicator from "../components/CalendarDateIndicator";

import daySettingsTools from "../components/daySettingsTools";

export default {
  name: "miniHome",
  components: {
    navbar,
    VueApexCharts,
    CalendarDateIndicator,
    daySettingsTools,
  },
  data: function () {
    return {
      selectedDate: dayjs(),
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        labels: ["P1", "WKD", "PHO", "HOL"],
        colors: ["#26a65b", "#1c7d44", "#2980b9", "#427ef5"],
        type: "donut",
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.globals.series[opts.seriesIndex];
          },
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  label: "TOTAL DAYS",
                  fontFamily: "Raleway",
                  fontWeight: 600,
                },
              },
            },
          },
        },
      },
      series: [19, 9, 1, 2],
    };
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
.donutContainerTimesheet,
.donutContainerMonth,
.donutContainerButtons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.donutContainerMonth {
  flex-direction: column;
}
.quickToolsBtn,
.quickToolsBtn:hover {
  background-color: #3498db;
  border-color: #3498db;
  color: white;
}
.heroContainer {
  max-width: 50%;
  margin: auto;
}

.detailTimesheet {
  flex-direction: column;
  font-size: 0.7rem;
  font-style: italic;
  color: #999999;
  cursor: pointer;
}

.timesheetValidated {
  margin-left: 3px !important;
}
</style>
