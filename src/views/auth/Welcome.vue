<template>
    <div class="welcome">
        <div style="text-align: center">

            <h1>Welcome</h1>
            <q-btn label="Login" color="primary" @click="gotoLogin()" />
        </div>

    </div>
</template>

<script>

export default {
    name: "Welcome",

    components: {

    },

    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),

        };
    },

    methods: {
        gotoLogin() {
            this.$router.push({
                name: 'login',
            });
        }
    },

    created() {
        if (this.user) {
            this.$router.push({
                name: 'web',
            });
        }

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
.welcome {
    display: grid;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>