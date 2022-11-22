<template>
    <div class="vh-100 d-flex justify-content-center align-items-center ">
        <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
            <h2 class="text-center mb-4 text-primary">Sign Up Form</h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control border border-primary" id="exampleInputEmail1"
                        aria-describedby="emailHelp" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control border border-primary" id="exampleInputPassword1"
                        v-model="password">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm password</label>
                    <input type="password" class="form-control border border-primary" id="exampleInputPassword2"
                        v-model="password_confirmation">
                </div>
                <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
                <div class="d-grid">
                    <button class="btn btn-primary" type="submit" @click="register">Sign up</button>
                </div>
            </form>
            <div class="mt-3">
                <p class="mb-0  text-center">Already have an account? <a class="text-primary fw-bold"
                        @click="gotoLogin">Sign
                        In</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Register",

    components: {

    },

    data() {
        return {

            email: '',
            password: '',
            password_confirmation: ''
        };
    },

    methods: {
        register() {
            axios.post('http://3.232.244.22/api/login', { email: this.email, password: this.password, password_confirmation: this.password_confirmation }).then(response => {
                console.log(response)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                this.$router.push({
                    name: 'login',
                });
            }).catch(error => {
                console.log(error)
            })
        },

        gotoLogin() {
            this.$router.push({
                name: 'login',
            });

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