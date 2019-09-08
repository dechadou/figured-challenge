<style src="./Admin.scss" module lang="scss"></style>
<script src="./Admin.js"></script>

<template>
    <div :class="[$style.admin]">
        <div class="container">
            <div class="row">
                <div class="col-12 text-right">
                    <router-link to="/">
                        <button class="btn btn-primary">Return Home</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="mb-5">Admin Area</h1>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12">
                    <button class="btn btn-primary" @click="create = true">Create Post</button>
                </div>
            </div>
            <div class="row" v-if="create">
                <div class="col-12">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="postTitle"/>
                        <label>Body</label>
                        <textarea class="form-control" v-model="postBody"></textarea>
                        <label>Published</label>
                        <input type="checkbox" class="form-control" v-model="isPublished">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" v-on:click="postCreate">Save</button>
                        <button class="btn btn-warning" v-on:click="create = false">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Post class="mb-5" v-for="(post, index) in posts.data"
                          :data="post"
                          :admin="true"
                          :key="post.id"
                          v-on:delete-row="removeRow(index)"/>
                </div>
            </div>

        </div>
    </div>
</template>
