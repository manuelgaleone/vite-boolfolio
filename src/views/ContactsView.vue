<script>
export default {
    name : 'Contacts View'
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
                        <form id="contactForm">
                            <!-- Name input -->
                            <div class="mb-3">
                                <label class="form-label" for="name">Nome</label>
                                <input class="form-control" id="name" type="text" placeholder="Paolo? O meglio Giovanni?" />
                            </div>
                            <!-- Email address input -->
                            <div class="mb-3">
                                <label class="form-label" for="emailAddress">EMail</label>
                                <input class="form-control" id="emailAddress" type="email" placeholder="nome@mail.com" />
                            </div>
                            <!-- Message input -->
                            <div class="mb-3">
                                <label class="form-label" for="message">Di cos'hai bisogno?</label>
                                <textarea class="form-control" id="message" type="text" placeholder="Raccontami qualcosa" style="height: 10rem;"></textarea>
                            </div>
                            <!-- Form submit button -->
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="submit">Invia</button>
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