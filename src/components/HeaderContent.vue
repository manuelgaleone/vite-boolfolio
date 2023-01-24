<script>
export default {
  name: "Header Component",
};
</script>

<template>
  <header class="main_header_wrapper">
    <div class="main_header_elements p-3">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center"
          >
            <img
              class="header_logo"
              src="../assets/imgs/identity_Tavola disegno 1 copia 4.png"
              alt="Brand Identity"
            />
          </div>
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center p-0 m-0 mt-3"
          >
            <ul class="menu_list d-flex m-0 p-0">
              <li class="menu_element">
                <router-link class="menu_item text-white" :to="{ name: 'home' }"
                  >HOME</router-link
                >
              </li>
              <li class="menu_element">
                <router-link
                  class="menu_item ml-15 text-white"
                  :to="{ name: 'contacts' }"
                  >CONTACTS</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header_logo {
  width: 75px;
}

.menu_element {
  list-style-type: none;
}

.menu_item {
  color: black;
  text-decoration: none;
  font-weight: 400;
}

.logo_header {
  font-weight: 800;
}

.main_header_wrapper {
  background-color: transparent;
}
</style>
