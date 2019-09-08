<style src="./Login.scss" module lang="scss"></style>
<script src="./Login.js"></script>

<template>
    <div :class="[$style.login]">
        <div class="container">
            <h2>Login</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" class="form-control" v-model="username" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="password" name="password" class="form-control" v-model="password"
                           placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>
