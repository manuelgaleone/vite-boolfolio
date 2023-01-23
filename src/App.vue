<script>
import HeaderContent from './components/HeaderContent.vue';
import ProjectCard from './components/ProjectCard.vue';
import FooterContent from './components/FooterContent.vue';

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
<router-view></router-view>
<FooterContent></FooterContent>
</template>

<style lang="scss">

</style>
