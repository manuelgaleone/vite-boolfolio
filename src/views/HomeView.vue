<script>
export default {
    name : 'Home View'
}
</script>

<template>
<div class="jumbotron_wrapper vh-100 d-flex flex-column justify-content-center">
    <div class="jumbotron jumbotron_elements">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1 class="text-white text-left jumbo_title inconsolata">
                        I am <br>
                        Manuel Galeone
                    </h1>
                    <p class="text-white inconsolata text-left jumbo_subtitle">
                        Full Stack Developer & Web Designer
                    </p>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
                    <img class="jumbo_mockup" src="../assets/imgs/macbook-png-def.png" alt="Jumbo mockup">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.jumbo_title {
    font-size: 75px;
    font-weight: 800;
}

.jumbo_mockup {
    width: 750px;
}

.jumbo_subtitle {
    font-weight: 400;
}

</style>