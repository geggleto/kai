<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">

            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="mobile_menu = !mobile_menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active' : mobile_menu }">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/competitions" class="navbar-item">Competitions</router-link>
                <router-link to="/third-party" class="navbar-item">Third Party Tools</router-link>
                <router-link to="/misc" class="navbar-item">Misc</router-link>
            </div>

        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navigation',

        data() {
            return {
                mobile_menu : false
            }
        }
    }
</script>