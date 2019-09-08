<style src="./Post.scss" module lang="scss"></style>
<script src="./Post.js"></script>

<template>
    <div :class="[$style.post]">
        <div v-if="!edit">
            <h1 class="mt-4" v-model="postTitle">{{ postTitle }}</h1>
            <p>Posted on {{post.created_at}}</p>
            <p class="lead" v-if="!admin" v-model="postBody">{{postBody}}</p>
        </div>


        <div class="row" :class="{ 'bg-light p-4':edit }">
            <div class="col-12">
                <div class="row mb-3" v-if="edit && admin">
                    <div class="col-12">
                        <div class="form-group">
                            <label>_id: {{postId}}</label>
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="postTitle"/>
                        </div>
                        <div class="form-group">
                            <label>Body</label>
                            <textarea class="form-control" v-model="postBody" :rows="10">{{post.body}}</textarea>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="isPublished">
                            <label class="form-check-label" for="defaultCheck1">
                                Published
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="btn-group" v-if="admin">
                            <button class="btn btn-primary" v-on:click="edit = true" v-if="!edit">Edit</button>
                            <button class="btn btn-secondary" v-on:click="edit = false" v-if="edit">Cancel</button>
                            <button class="btn btn-primary" v-on:click="postEdit" v-if="edit">Save</button>
                            <button class="btn btn-danger" v-on:click="postDelete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
    </div>
</template>
