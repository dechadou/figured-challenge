<style src="./Login.scss" module lang="scss"></style>
<script src="./Login.js"></script>

<template>
    <div :class="[$style.login]">
        <Nav/>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Login</h2>
                </div>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" class="form-control" v-model="username" placeholder="Email" aria-describedby="emailHelpBlock"/>
                    <small id="emailHelpBlock" class="form-text text-muted">
                        Email is <b>test@test.com</b>
                    </small>
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="password" name="password" class="form-control" v-model="password"
                           placeholder="Password" aria-describedby="passwordHelpBlock"/>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Password is <b>password</b>
                    </small>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>
