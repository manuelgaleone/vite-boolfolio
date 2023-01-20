<script>
export default {
    name : 'Contacts View'
}
</script>

<template>
<div class="jumbotron_wrapper">
    <div class="jumbotron bg-light jumbotron_elements py-4">
        <div class="container">
            <h1 class="display-4">Contattami</h1>
            <p class="lead">Questo è il mio Modulo.</p>
        </div>
    </div>
</div>
<div class="contacts_wrapper">
    <div class="contacts_elements">
        <!-- Wrapper container -->
        <div class="container py-4">

            <!-- Bootstrap 5 starter form -->
            <form id="contactForm">

            <!-- Name input -->
            <div class="mb-3">
                <label class="form-label" for="name">Name</label>
                <input class="form-control" id="name" type="text" placeholder="Name" />
            </div>

            <!-- Email address input -->
            <div class="mb-3">
                <label class="form-label" for="emailAddress">Email Address</label>
                <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
            </div>

            <!-- Message input -->
            <div class="mb-3">
                <label class="form-label" for="message">Message</label>
                <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
            </div>

            <!-- Form submit button -->
            <div class="d-grid">
                <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
            </form>
        </div>
    </div>
</div>
</template>

<style lang="scss">
</style>