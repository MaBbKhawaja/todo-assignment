<template>
    <div id="main-page">
        <!-- ADD YOUR NAVIGATION/Header here -->
        <Header />
        <!-- <Sidebar /> -->
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue';

export default {
    name: "WebIndex",
    components: { Header }
}
</script>

<style>
.page {
    width: 1110px;
    margin: 0 auto;
    /* margin-top: 98px; */
    /* overflow: auto; */
    margin-bottom: 200px;
}
</style>