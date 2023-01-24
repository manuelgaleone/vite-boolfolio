<script>
export default {
    name : 'Header Component'
}
</script>

<template>
<header class="main_header_wrapper">
    <div class="main_header_elements p-3">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <img class="header_logo" src="../assets/imgs/identity_Tavola disegno 1 copia 3.png" alt="Brand Identity">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-end p-0 m-0">
                    <ul class="menu_list d-flex m-0 p-0">
                        <li class="menu_element">
                            <router-link class="menu_item" :to="{ name: 'home'}">Home</router-link>
                        </li>
                        <li class="menu_element">
                            <router-link class="menu_item px-3" :to="{ name: 'contacts'}">Contacts</router-link>
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
    width:75px;
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