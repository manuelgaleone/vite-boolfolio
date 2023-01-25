<script>
import axios from 'axios';

export default {
    name : 'Contacts View',
    data() {
        return {
            api_url: "http://127.0.0.1:8000",
            name : '',
            email: '',
            content: '',
            success: false,
            loading: false
        }
    },
    methods : {
        sendForm() {
            this.loading = true

            console.log('name', this.name)
            console.log('email', this.email)
            console.log('content', this.content)

            const data = {
                'name' : this.name,
                'email' : this.email,
                'content' : this.content
            }

            axios.post(`${this.api_url}/api/leads`, data).then((response) =>{

                this.success = response.data.success;

                console.log(response);

                if(this.success) {
                    this.name = '',
                    this.email = '',
                    this.content = ''
                }
                this.loading = false;
            })
        }
    }
}
</script>

<template>
<div class="contacts_wrapper d-flex justify-content-center flex-column">
    <div class="home_wrapper">
        <div class="home_elements">
            <div class="jumbotron_wrapper">
                <div class="jumbotron_elements">
                    <div class="jumbotron_home">
                        <h1 class="jumbo_title m-0 text-center text-white">
                            Restiamo in <span class="fancy">Contatto</span>!
                        </h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="contacts_elements mt-5 mb-5">
                    <!-- Wrapper container -->
                    <div class="container">
                        <form @submit.prevent="sendForm()" method="post">
                            <!-- Name input -->
                            <div class="mb-3">
                                <input class="form-control" v-model="name" name="name" id="name" type="text" placeholder="Paolo? O meglio Giovanni?" />
                            </div>
                            <!-- Email address input -->
                            <div class="mb-3">
                                <input class="form-control" v-model="email" name="email" id="email" type="email" placeholder="Nome@mail.com" />
                            </div>
                            <!-- Message input -->
                            <div class="mb-3">
                                <textarea class="form-control" v-model="content" name="content" id="content" type="text" placeholder="Raccontami qualcosa!" style="height: 10rem;"></textarea>
                            </div>
                            <!-- Form submit button -->
                            <div class="d-grid">
                                <button class="btn btn-light btn-lg" :disabled="loading" type="submit" >{{loading ? 'sending' : 'Spedisci'}}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<style lang="scss">
</style>