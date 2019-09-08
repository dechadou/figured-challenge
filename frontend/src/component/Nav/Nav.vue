<style src="./Nav.scss" module lang="scss"></style>
<script src="./Nav.js"></script>

<template>
    <nav :class="[$style.nav]" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <router-link to="/" class="navbar-brand">Figured Blog</router-link>
            <div class="btn-group" role="group">
                <router-link to="/admin" v-if="['home'].indexOf($route.name) > -1">
                    <button class="btn btn-primary">
                        Admin
                    </button>
                </router-link>
                <router-link to="/" v-if="['admin'].indexOf($route.name) > -1">
                    <button class="btn btn-primary">Return Home</button>
                </router-link>
                <router-link to="/logout" v-if="['admin'].indexOf($route.name) > -1">
                    <button class="btn btn-primary">Logout</button>
                </router-link>
            </div>
        </div>
    </nav>
</template>
