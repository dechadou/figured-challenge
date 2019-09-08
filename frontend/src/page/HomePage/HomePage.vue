<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
    <div :class="[$style.homePage]">
        <Nav/>
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h1 class="mb-5">Figured Blog</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <Post class="mb-5" v-for="post in posts.data"
                          :data="post"
                          :admin=false
                          :key="post.id"/>
                </div>
            </div>
        </div>
    </div>
</template>
