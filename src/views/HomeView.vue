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
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0">
                    <div class="jumbo_titles d-flex justify-content-center flex-column">
                        <h1 class="jumbo_title m-0">
                            Ciao, sono <span class="fancy">Manuel</span>!
                        </h1>
                        <p class="jumbo_subtitles mb-0 mt-3">
                            Mi diletto in tante, <strong>troppe cose</strong>.<br>
                            Comunemente sono un <strong>Full Stack Developer</strong>
                            e so fare anche il <strong>caffè</strong>!
                        </p>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0">
                    <div class="jumbo_right p-5">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="home_wrapper vh-100">
    <div class="projects_elements">
        <ProjectView></ProjectView>
    </div>
</div>
</template>

<style lang="scss">
.jumbo_titles {
    padding: 100px;
}

.jumbo_title {
    font-weight: 900;
}

.jumbo_right {
    background-image: url('../assets/imgs/pexels-photo-249798.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}

.mockup_about {
    width:550px;
}

.fancy {
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background-image: 
      url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2826.jpg?w=2000");
    background-size: 110% auto;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}

.left_about {
    background-color: black;
}

</style>