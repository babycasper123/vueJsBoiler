<template>
  <div
    class="modal fade"
    id="exampleModalFullscreen"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title h4 dashboardTitle" id="exampleModalFullscreenLabel">
            Dashboard
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">

                <div class="shadow-sm p-3 mb-5 bg-white rounded"><span class="flag-icon flag-icon-in"></span></div>








        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
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
.dashboardTitle{
    margin: 0 auto;
    width: 100%;
}
</style>