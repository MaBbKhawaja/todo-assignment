<template>
    <div>

        <q-input outlined v-model="item.title" label="Title" :readonly="view" />
        <q-input outlined v-model="item.description" label="Description" style="margin-top: 24px" :readonly="view" />
        <div class="d-flex justify-content-between">

            <q-btn label="Save" color="primary" @click="edit ? editTodo() :createTodo()" style="margin-top: 24px" />
            <q-btn label="Close" color="primary" @click="$emit('close')" style="margin-top: 24px" />
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Create",
    props: {
        todo: {
        },
        view: { default: false },
        edit:{}
    },

    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            item: {}
        };
    },

    methods: {
        createTodo() {
            axios.post('http://3.232.244.22/api/item', this.item, {
                headers: {
                    Authorization: 'Bearer ' + this.user.token
                }
            }).then(res => {
                if (res.data.success === true) {
                    this.$emit('close')
                }
            }).catch(err => {
                console.log(err)
            })
        }
        ,
        editTodo() {
            axios.put(`http://3.232.244.22/api/item/${this.item.id}`, this.item, {
                headers: {
                    Authorization: 'Bearer ' + this.user.token
                }
            }).then(res => {
                if (res.data.success === true) {
                    this.$emit('close')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    },

    created() {
        if (this.todo) {
            this.item = this.todo
        }
    },

};
</script>

<style lang="scss" scoped>

</style>