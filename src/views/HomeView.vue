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
        <div class="home_jumbo">
            <h1 class="minimal_title m-0 text-center text-white">
                Ciao, sono <span class="fancy">Manuel</span>!
            </h1>
        </div>
    </div>
</div>
<div class="img_text_wrapper">
    <div class="img_text_elements mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0 mt-2">
                    <div class="minimal_titles d-flex justify-content-center flex-column">
                        <p class="minimal_subtitles mb-0 mt-3">
                            Mi diletto in tante, <strong>troppe cose</strong>.<br>
                            Comunemente sono un <strong>Full Stack Developer</strong>
                            e so fare anche il <strong>caffè</strong>!
                        </p>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0 mt-2">
                    <div class="minimal_right p-5">

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
.home_jumbo {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	padding: 250px;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.minimal_titles {
    padding: 100px;
}

.minimal_title {
    font-weight: 900;
    font-size: 75px;
}

.minimal_right {
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