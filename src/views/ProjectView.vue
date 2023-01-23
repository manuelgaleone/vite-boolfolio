<script>
import axios from 'axios';

export default {
    name : 'Project View',
    data() {
        return {
            api_url: "http://127.0.0.1:8000",
            projects: {},
            error: "",
            loading: true,
            max: 100
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
        },
        maxText(text) {
        console.log(text);
        if (text.length > this.max) {
            return text.slice(0, this.max) + '...'
        }
        return text
        }
    },
    mounted() {
        this.getProjects(this.api_url + "/api/projects");
    },
}
</script>

<template>
<div class="project_cards_wrapper">
    <div class="project_cards_elements">
        <div class="container p-5">
            <div class="row justify-content-around">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 m-0 p-0 p-2" v-for="project in projects.data">
                    <div class="card_minimal_wrapper">
                        <img class="card_minimal_image" :src="imageConverter(project.image)" alt="{{ project.title }}">
                        <div class="card_minimal_elements d-flex justify-content-center flex-column text-white">
                            <h5 class="card_title">
                                <strong>{{ project.title }}</strong>
                            </h5>
                            <p class="card_text">
                                {{ maxText(project.content) }}
                            </p>
                            <h6 class="card_category" v-if="project.category.name">
                                Category: {{ project.category.name }}
                            </h6>
                            <h6 class="card_category" v-else>
                                Nessuna categoria.
                            </h6>
                            <h6 class="card_technology" v-if="project.technologies.name">
                                Tecnologie: {{ project.technologies.name }}
                            </h6>
                            <h6 class="card_technology" v-else>
                                Nessuna tecnologia.
                            </h6>
                            <router-link class="card_cta" :to="{ name: 'single-project', params: { slug: project.slug } }">Scopri di più</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.card_minimal_wrapper {
    position: relative;
}

.card_minimal_elements {
    opacity: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
}

.card_minimal_wrapper:hover {
    .card_minimal_elements {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.253);
        transition: 0.4s;
        cursor: pointer;
    }
}

.card_minimal_image {
    object-fit: cover;
    width: 100%;

}

.card_title {
    font-size: 15px;
}

.card_text {
    font-size: 12px;
}

.card_category {
    font-size: 12px;
}

.card_technology {
    font-size: 12px;
}

.card_cta {
    font-size: 15px;
    color: white;
}

.card_cta:hover {
    text-decoration: line-through;
    color: white;
    font-weight: 600;
}
</style>