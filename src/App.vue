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
            <div class="container">
                <div class="row m-0 justify-content-center p-4">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        </div>
    </div>
    <FooterContent></FooterContent>
</template>

<style lang="scss">

</style>
