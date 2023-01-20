<script>
import axios from 'axios';

export default {
    name : 'Project View',
    data() {
        return {
            api_url: "http://127.0.0.1:8000",
            projects: {},
            error: "",
            loading: true
        };
    },
    methods: {
        getProjects(url) {
            axios.get(url)
                .then(response => {
                console.log(response.data);
                this.projects = response.data;
                this.loading = false;
            })
                .catch(error => {
                console.error(error);
                this.error = error.message;
            });
        },
        imageConverter(way) {
            console.log(way);
            if (way) {
                return this.api_url + "/storage/" + way;
            }
            return "https://upload.wikimedia.org/wikipedia/commons/c/cd/Immagine_non_disponibile.JPG";
        }
    },
    mounted() {
        this.getProjects(this.api_url + "/api/projects");
    },
}
</script>

<template>
<div class="jumbotron_wrapper">
    <div class="jumbotron bg-light jumbotron_elements py-4">
        <div class="container">
            <h1 class="display-4">I miei progetti</h1>
            <p class="lead">Questo è il mio Portfolio.</p>
        </div>
    </div>
</div>
<div class="project_cards_wrapper">
    <div class="project_cards_elements">
        <div class="container">
            <div class="row m-0 justify-content-center p-4">
                <div class="col-3 card m-2 p-0" v-for="project in projects.data" v-if="!loading">
                    <div class="card_elements">
                        <img class="card-img-top" :src="imageConverter(project.image)" alt="{{ project.title }}">
                        <div class="card-body text-center">
                            <h5 class="card-title">
                                <strong>{{ project.title }}</strong>
                            </h5>
                            <p class="card-text">
                                {{ project.content }}
                            </p>
                            <h6 v-if="project.category.name">
                                Category: {{ project.category.name }}
                            </h6>
                            <h6 v-else>
                                Nessuna categoria.
                            </h6>
                            <h6 v-if="project.technologies.name">
                                Tecnologie: {{ project.technologies.name }}
                            </h6>
                            <h6 v-else>
                                Nessuna tecnologia.
                            </h6>
                            <router-link class="text-primary" :to="{ name: 'single-project', params: { slug: project.slug } }">Scopri di più</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
</style>