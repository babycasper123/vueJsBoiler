<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand timeSheetLogo" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
         
          <!-- <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li> -->
            <li
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
              class="nav-item dropdown"
            >
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Events
          </a>
              <ul
                class="dropdown-menu"
                :class="isHovering ? 'show' : ''"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item disabled" href="#">Work from home</a></li>
                <li><a class="dropdown-item" href="#">Request holiday</a></li>
                <li>
                  <a class="dropdown-item disabled" href="#">Declare Sickness</a>
                </li>
                <li>
                  <a class="dropdown-item disabled" href="#">My History</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbarComponent",
  data: () => {
    return {
      isHovering: false,
    };
  },
  methods: {
    showDropdown: () => {},
  },
};
</script>


<style scoped>
.timeSheetLogo {
  background: url(../../assets/mantu.svg),
    linear-gradient(transparent, transparent) no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 81px;
  height: 20px;
}
</style>