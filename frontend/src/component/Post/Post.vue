<style src="./Post.scss" module lang="scss"></style>
<script src="./Post.js"></script>

<template>
    <div :class="[$style.post]">

        <div class="row" v-if="!edit">
            <div class="col-12">
                <h2 v-model="postTitle">{{ postTitle }}</h2>
                <p v-if="!admin" v-model="postBody">{{postBody}}</p>
                <small v-if="!admin"><b>Created: {{post.created_at}}</b></small>
            </div>
        </div>
        <div class="row" v-if="edit && admin">
            <div class="col-12">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="postTitle"/>
                    <label>Body</label>
                    <textarea class="form-control" v-model="postBody">{{post.body}}</textarea>
                    <label>Published</label>
                    <input type="checkbox" class="form-control" v-model="isPublished">
                </div>
            </div>
        </div>
        <div class="row" v-if="admin">
            <div class="col-12">
                <button class="btn btn-primary" v-on:click="edit = true" v-if="!edit">Editar</button>
                <button class="btn btn-primary" v-on:click="postEdit" v-if="edit">Save</button>
                <button class="btn btn-danger" v-on:click="postDelete">Eliminar</button>
            </div>
        </div>

    </div>
</template>
