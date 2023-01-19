<script>
import axios from 'axios';

export default {
    data() {
        return {
            api_url : 'http://127.0.0.1:8000',
            projects: {},
            error: "",
        }
    },
    methods : {
        getProjects(url) {
            axios.get(url)
            .then(response => {
                console.log(response.data);
                this.projects = response.data;
            })
            .catch(error => {
                console.error(error)
                this.error = error.message
            })
        }
    },
    mounted() {
    this.getProjects(this.api_url + '/api/projects');
  }
}

</script>

<template>
    <div class="main_content_wrapper">
        <div class="main_content_elements">
            <div class="container">
                <div class="row">
                    <div class="col-4" v-for="project in projects.data">
                        <div class="card-body text-center">
                            <h4>
                                {{ project.title }}
                            </h4>
                            <p>
                                {{ project.body }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
