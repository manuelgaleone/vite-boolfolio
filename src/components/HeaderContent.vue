<script>
export default {
    name : 'Header Component'
}
</script>

<template>
<header class="main_header_wrapper bg-dark">
    <div class="main_header_elements p-3">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-12">
                    <h5 class="text-center text-white">
                        Manuel &hearts;
                    </h5>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <ul class="menu_list d-flex m-0 mt-3 p-0">
                        <li class="menu_element">
                            <router-link class="menu_item text-white" :to="{ name: 'home'}">Home</router-link>
                        </li>
                        <li class="menu_element">
                            <router-link class="menu_item text-white px-3" :to="{ name: 'contacts'}">Contacts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss">
.menu_element {
    list-style-type: none;
}

.menu_item {
    color: black;
    text-decoration: none;
    font-weight: 800;
}

.logo_header {
    font-weight: 800;
}

.main_header_wrapper {
    background-color: transparent;
}
</style>