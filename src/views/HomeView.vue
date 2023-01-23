<script>
export default {
    name : 'Home View'
}
</script>

<template>
<!-- <div class="jumbotron_wrapper vh-100 d-flex flex-column justify-content-center">
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
</div> -->

<div class="home_wrapper">
    <div class="home_elements">
        <div class="home_titles d-flex justify-content-center flex-column">
            <div class="container p-5">
                <h1 class="home_title text-center m-0">
                    Ciao, sono <span class="fancy">Manuel</span>!
                </h1>
                <p class="home_subtitle mb-0 mt-3 text-center">
                    Mi diletto in tante, <strong>troppe cose</strong>.<br>
                    Comunemente sono un <strong>Full Stack Developer</strong>
                    e so fare anche il <strong>caffè</strong>!
                </p>
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