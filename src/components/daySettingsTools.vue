<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="tsSettingsDay"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">Day Settings</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Request Holiday
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Declare Sickness
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Work from home
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content shadow p-3 mb-5 bg-body rounded d-flex justify-content-between" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div
                        class="
                          d-flex
                          flex-row
                          bd-highlight
                          mb-3
                          align-items-center
                        "
                      >
                        <div class="p-2 bd-highlight">Date</div>
                        <div class="p-2 bd-highlight flex-grow-1">
                          <date-picker
                            v-model="time3"
                            range
                            format="DD-MM-YYYY"
                          ></date-picker>
                        </div>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-row
                          bd-highlight
                          mb-3
                          align-items-center
                        "
                      >
                        <div class="p-2 bd-highlight">Holiday Type</div>
                        <div class="p-2 bd-highlight flex-grow-1">
                          <select
                            class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>Select holiday type</option>
                            <option value="1">Paid holidays</option>
                            <option value="2">Unpaid holidays</option>
                            <option value="3">Special leave</option>
                          </select>
                        </div>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-row
                          bd-highlight
                          mb-3
                          align-items-center
                        "
                      >
                        <div class="p-2 bd-highlight">Number of days</div>
                        <div class="p-2 bd-highlight flex-grow-1">
                          <input
                            type="number"
                            class="form-control"
                            id="numberofDays"
                          />
                        </div>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-row
                          bd-highlight
                          mb-3
                          align-items-center
                        "
                      >
                        <div class="p-2 bd-highlight mt-4">
                        <button type="button" class="btn btn-primary btn-sm">Send Request</button>
                        </div>
                      </div>




                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "daySettingsTools",
  components: { DatePicker },
  props: {
    showDaySettings: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    };
  },
};
</script>

<style>
</style>