<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TODO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" @click="logout">Logout<span class="sr-only">Logout</span></a>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
    name: "Header",

    components: {

    },

    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),

        };
    },

    methods: {
        logout() {
            axios.post('http://3.232.244.22/api/logout', { token: this.user.token }).then(response => {
                console.log(response)
                this.$router.push({
                    name: 'login',
                });
            }).catch(error => {
                console.log(error)
            })
        }
    },

    created() {

    },

    validations: function () {
        return {

        };
    },

    computed: {

    }

};
</script>

<style lang="scss" scoped>

</style>