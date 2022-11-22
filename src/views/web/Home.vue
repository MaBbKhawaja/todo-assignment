<template>
    <div>
        <div class="d-flex justify-content-end" style="margin-block: 24px">
            <q-btn label="Create Todo item" color="primary" @click="createModal = true" />
        </div>

        <div class="todo-row shadow-sm border rounded-5 border-primary bg-white" v-for="item in todos" :key="item.id">
            <div>
                <div style="font-weight: bold;font-size: 22px;">
                    {{ item.title }}
                </div>
                {{ item.description }}
            </div>
            <div>
                <q-btn label="View" color="primary" @click="viewItem(item)" />
                <q-btn label="Edit" color="primary" @click.prevent="editItem(item)" />
                <q-btn label="Delete" color="primary" @click.prevent="deleteItem(item)" />
            </div>
        </div>
        <div style="text-align: center">

            <q-spinner color="primary" size="5em" v-if="loadData" />
        </div>
        <q-dialog v-model="createModal" persistent v-if="createModal">
            <q-card style="width: 700px; max-width: 80vw;padding: 16px 16px 16px 36px;">
                <q-card-section>
                    <div class="text-h6">Create</div>
                </q-card-section>
                <q-card-section>
                    <Create :todo="selectedItem" :edit="edit" :view="view" @close="closeModal" />
                </q-card-section>
            </q-card>

        </q-dialog>
    </div>
</template>

<script>
import axios from 'axios';
import Create from './Create.vue';

export default {
    name: "Home",

    components: {
        Create
    },

    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            todos: [],
            createModal: false,
            selectedItem: {},
            view: false,
            loadData: false
        };
    },

    methods: {
        getTodos() {
            this.loadData = true
            axios.get('http://3.232.244.22/api/items', {
                headers: {
                    Authorization: 'Bearer ' + this.user.token
                }
            }).then(res => {
                console.log(res)
                this.todos = res.data.items.data
                this.loadData = false
            }).catch(err => {
                console.log(err)
                this.loadData = false
            })
        },
        viewItem(item) {
            this.selectedItem = item
            this.createModal = true
            this.view = true

        },
        editItem(item) {
            this.selectedItem = item
            this.edit = true
            this.view = false
            this.createModal = true

        },
        closeModal() {
            this.createModal = false;
            this.selectedItem = {}
            this.view = false
            this.edit = false
            this.getTodos()
        },
        deleteItem({ id }) {
            this.loadData = true
            axios.delete(`http://3.232.244.22/api/item/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + this.user.token
                }
            }).then(res => {
                console.log(res)
                this.loadData = false
                this.getTodos()
            }).catch(err => {
                console.log(err)
            })
        }
    },

    created() {
        this.getTodos()
    },

};
</script>

<style lang="scss" scoped>
.todo-row {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 10px 20px;
    font-size: 16px;
    align-items: center;
    margin-top: 24px;
}
</style>