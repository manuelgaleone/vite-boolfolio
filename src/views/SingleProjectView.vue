<script>
import axios from 'axios'

export default {
    name : 'Home View',
    data() {
        return {
            api_url: "http://127.0.0.1:8000",
            projects: {},
            error: ""
        }
    },
    methods: {
    imageConverter(way) {
        console.log(way);
        if (way) {
            return this.api_url + "/storage/" + way;
        }
        return "https://upload.wikimedia.org/wikipedia/commons/c/cd/Immagine_non_disponibile.JPG";
    }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const link = this.api_url + '/api/projects/' + this.$route.params.slug
        //this.getProjects(this.api_url + "/api/projects/:slug");
        console.log(link)
        axios.get(link)
        .then(response => {
            if(response.data.success) {
                this.projects = response.data;
            } else {
                
            }
            console.log(response)
        }).catch(error =>
            console.log(error)
    )}
}
</script>

<template>
<div class="single_project_wrapper">
    <div class="single_project_elements py-4">
        <div class="container">
            <div class="single_project" v-if="projects">
                <h1>
                    {{ projects.title }}
                </h1>
                <p>
                    {{ projects.content }}
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
</style>