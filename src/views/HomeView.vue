<script>
import ProjectView from './ProjectView.vue';

export default {
    name : 'Home View',
    components : {
        ProjectView
    }
}
</script>

<template>

<div class="jumbotron_wrapper">
    <div class="jumbotron_elements">
        <div class="jumbotron_home">
            <h1 class="jumbo_title m-0 text-center text-white">
                Ciao, sono <span class="fancy">Manuel</span>!
            </h1>
        </div>
    </div>
</div>
<div class="img_text_wrapper">
    <div class="img_text_elements">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-0 mt-2">
                    <div class="img_text_left d-flex justify-content-center flex-column py-5">
                        <h1 class="img_text_title text-white text-center m-0">
                            Un <span class="fancy">Creativo</span>
                        </h1>
                        <p class="img_text_subtitle text-white text-center text-mb-0 mt-3">
                            Mi diletto in tante, <strong>troppe cose</strong>.<br>
                            Comunemente sono un <strong>Full Stack Developer</strong>
                            e so fare anche il <strong>caffè</strong>!
                        </p>
                        <div class="cta_button_wrapper d-flex justify-content-center">
                            <a class="cta_button_img_text mt-3" href="http://localhost:5174/contacts">CONTATTAMI</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="home_wrapper">
    <div class="projects_elements">
        <ProjectView></ProjectView>
    </div>
</div>
</template>

<style lang="scss">
.jumbotron_home {
    padding-top: 75px;
    padding-bottom: 50px;
}

.jumbo_title {
    font-weight: 900;
    font-size: 75px;
}

.img_text_element {
        margin-top: 25px;
        margin-bottom: 25px;
}

.img_text_title {
    font-weight: 900;
    font-size: 75px;
}

.img_text_home {
    background-image: url('../assets/imgs/pexels-photo-249798.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}

</style>