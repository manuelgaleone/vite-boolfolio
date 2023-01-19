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
                    <div class="col-6 d-flex justify-content-end">
                        <ul class="menu_list d-flex">
                            <li class="menu_element">
                                <a class="menu_item" href="">Home</a>
                            </li>
                            <li class="menu_element">
                                <a class="menu_item px-4" href="">About me</a>
                            </li>
                            <li class="menu_element">
                                <a class="menu_item" href="">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss

">
.menu_element {
    list-style-type: none;
}

.menu_item {
    color: black;
    text-decoration: none;
}
</style>