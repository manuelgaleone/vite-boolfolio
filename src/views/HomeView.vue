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
<div class="home_wrapper vh-100">
    <div class="home_elements">
        <div class="container">
            <div class="home_titles p-5 d-flex justify-content-center flex-column">
                    <h1 class="home_title text-center m-0">
                        Ciao, sono <span class="fancy">Manuel</span>!
                    </h1>
                    <p class="home_subtitle mb-0 mt-3 text-center">
                        Mi diletto in tante, <strong>troppe cose</strong>.<br>
                        Comunemente sono un <strong>Full Stack Developer</strong>
                        e so fare anche il <strong>caffè</strong>!
                    </p>
            </div>
            <div class="projects_elements">
                <ProjectView></ProjectView>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.home_title {
    font-weight: 900;
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

</style>