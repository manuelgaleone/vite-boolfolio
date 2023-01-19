<script>
import HeaderContent from './components/HeaderContent.vue';
import FooterContent from './components/FooterContent.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
    ProjectCard,
    HeaderContent,
    FooterContent
}
}

</script>

<template>
    <HeaderContent></HeaderContent>
    <div class="main_content_wrapper">
        <div class="main_content_elements">
            <div class="jumbotron_wrapper">
                <div class="jumbotron bg-light jumbotron_elements py-4">
                    <div class="container">
                        <h1 class="display-4">Ciao Mondo!</h1>
                        <p class="lead">Questo è il mio Portfolio personale.</p>
                        <hr class="my-4">
                        <p>Utilizzo delle chiamate API al mio Backend per funzionare!</p>
                    </div>
                </div>
            </div>
            <div class="project_cards_wrapper">
                <div class="project_cards_elements">
                    <div class="container">
                        <div class="row m-0 justify-content-center p-4">
                            <ProjectCard></ProjectCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterContent></FooterContent>
</template>

<style lang="scss">

</style>
