<script>
export default {
    name : 'Header Component'
}
</script>

<template>
<header class="main_header_wrapper">
    <div class="main_header_elements p-4">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-6">
                    <h3>
                        Boolfolio
                    </h3>
                </div>
                <div class="col-6 d-flex justify-content-end p-0">
                    <ul class="menu_list d-flex">
                        <li class="menu_element">
                            <router-link class="menu_item" :to="{ name: 'home'}">Home</router-link>
                        </li>
                        <li class="menu_element">
                            <router-link class="menu_item px-3" :to="{ name: 'projects'}">Projects</router-link>
                        </li>
                        <li class="menu_element">
                            <router-link class="menu_item" :to="{ name: 'contacts'}">Contacts</router-link>
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
}
</style>