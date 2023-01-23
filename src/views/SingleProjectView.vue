<script>
import axios from 'axios'

export default {
    name : 'Home View',
    data() {
        return {
            api_url: "http://127.0.0.1:8000",
            projects: {},
            error: "",
            loading: true
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
                this.loading = false;
            } else {
                
            }
            console.log(response)
        }).catch(error =>
            console.log(error)
    )}
}
</script>

<template>
<div class="single_project_wrapper vh-100 d-flex justify-content-center flex-column">
    <div class="single_project_elements py-4">
        <div class="container">
            <div class="single_project text-center" v-if="!loading">
                <img class="project_image" :src="api_url + '/storage/' + projects.data.image" :alt="projects.data.title">
                <div class="project_contents py-4 text-center">
                    <h1 class="project_title">
                        {{ projects.data.title }}
                    </h1>
                    <p class="project_content">
                        {{ projects.data.content }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.project_image {
    width:500px;
}

.project_title {
    font-size: 30px;
}

.project_content {
    font-size: 15px;
}
</style>