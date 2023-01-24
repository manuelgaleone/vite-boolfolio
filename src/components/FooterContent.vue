<script>
export default {
    name : 'Footer Component'
}
</script>

<template>
<footer class="main_footer_wrapper">
    <div class="main_footer_elements p-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="copyright text-center text-white p-0 m-0">
                        ALL RIGHTS RESERVED &copy; 2023
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="icons_wrapper d-flex justify-content-center">
                        <a href="https://instagram.com/manuel.galeone"><i class="fa-brands fa-instagram footer_icons"></i></a>
                        <a href="https://github.com/manuelgaleone"><i class="fa-brands fa-github footer_icons px-3"></i></a>
                        <a href="https://linkedin.com/manuelgaleone"><i class="fa-brands fa-linkedin-in footer_icons"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
.copyright {
    font-weight: 300;
}

.footer_icons {
    font-size: 20px;
    color: white;
}
</style>