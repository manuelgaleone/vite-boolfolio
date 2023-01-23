<script>
export default {
    name : 'Contacts View'
}
</script>

<template>
<div class="contacts_wrapper vh-100 d-flex justify-content-center flex-column">
    <div class="home_wrapper">
        <div class="home_elements">
            <div class="container">
                <div class="home_titles p-3 d-flex justify-content-center flex-column">
                    <h1 class="home_title text-center m-0">
                        Rimaniamo <span class="fancy">Contatto</span>!
                    </h1>
                    <p class="home_subtitle mb-0 mt-3 text-center">
                        Contattami dal Form <strong>sottostante</strong>.
                    </p>
                </div>
                <div class="contacts_elements">
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