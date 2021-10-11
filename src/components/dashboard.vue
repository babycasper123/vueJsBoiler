<template>
  <div>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <div class="offcanvas-title" id="offcanvasExampleLabel">
          <span class="dashboardFlag"
            ><span class="flag-icon flag-icon-in"></span
          ></span>
          <h5 class="dashboardTitle">CHANDRAN Vishnu</h5>
        </div>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="shadow p-3 mb-3 mt-2 bg-body rounded">
          <div class="row">
            <div class="col-lg-12">
              <h6 class="text-center">Monthly Summary</h6>
              <div class="monthlySummarySection">
                <ul class="list-group">
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    P1
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    WKD
                    <span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    PHO
                    <span class="badge bg-primary rounded-pill">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow p-3 mb-3 mt-4 bg-body rounded">
          <div class="row">
            <div class="col-lg-12">
              <h6 class="text-center">Leave Summary</h6>
              <div class="leaveSummarySection">
                <ul class="list-group">
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    Total leaves available
                    <span class="badge bg-primary rounded-pill">13</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    Carry over leaves from prev year
                    <span class="badge bg-primary rounded-pill">3</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    Sick leaves available
                    <span class="badge bg-primary rounded-pill">6</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style>
.dashboardTitle {
  margin: 0 auto;
  width: 100%;
}

.dashboardFlag {
  font-size: 1.3rem;
  border-radius: 2px;
  margin-right: 10px;
}

.dashboardFlag > span {
  border-radius: 2px;
}
.offcanvas-title {
  display: flex;
  align-items: center;
}
</style>