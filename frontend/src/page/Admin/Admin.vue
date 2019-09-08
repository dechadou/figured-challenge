<style src="./Admin.scss" module lang="scss"></style>
<script src="./Admin.js"></script>

<template>
    <div :class="[$style.admin]">
        <Nav/>


        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="mb-5">Admin Area</h1>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12">
                    <button class="btn btn-lg btn-primary" @click="create = true">Create new post</button>
                </div>
            </div>
            <div class="row bg-light p-4" v-if="create">
                <div class="col-12">

                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="postTitle"/>
                    </div>
                    <div class="form-group">
                        <label>Body</label>
                        <textarea class="form-control" v-model="postBody" rows="10"></textarea>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
                               v-model="isPublished">
                        <label class="form-check-label" for="defaultCheck1">
                            Published
                        </label>
                    </div>

                    <div class="form-group mt-4">
                        <button class="btn btn-primary" v-on:click="postCreate">Save</button>
                        <button class="btn btn-warning" v-on:click="create = false">Cancel</button>
                    </div>

                </div>
            </div>
            <div class="row" v-if="!create">
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
