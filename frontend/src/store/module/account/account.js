import {userService} from '../../../_services';
import getRouter from '../../../router/router';

const user = JSON.parse(localStorage.getItem('user'));

const state = {
    status:{
        loggedIn: false,
        submitted: false
    },
    user:{
        user
    },
    api: {
        fetch: {
            inProgress: false,
            completed: false,
            success: false,
            error: false,
        },
        data: {}
    }
};

const getter = {
    'API_DATA': state => {
        return state.api.data
    }
}

const actions = {

    login({dispatch, commit}, {username, password}) {
        commit('loginRequest', {username});

        userService.login(username, password).then(
            user => {
                commit('loginSuccess', user);
                getRouter().push('/admin');
            },
            error => {
                commit('loginFailure', error);
            },
        );
    },
    logout({commit}) {
        userService.logout();
        commit('logout');
    },
    createPost({commit}, {postTitle, postBody, isPublished}) {
        userService.createPost(postTitle, postBody, isPublished).then(response => {
            commit('formResponse', response)
        });
    },
    editPost({commit}, {postId, postTitle, postBody, isPublished}) {
        userService.editPost(postId, postTitle, postBody, isPublished);
    },
    deletePost({commit}, {postId}) {
        userService.deletePost(postId);
    }

};

const mutations = {
    'SET_API_DATA_FETCH_IN_PROGRESS': state => {
        state.api.fetch.inProgress = true;
        state.api.fetch.completed = false;
        state.api.fetch.success = false;
        state.api.fetch.error = false;
        state.api.data = {}
    },
    'SET_API_DATA_FETCH_SUCCESS': (state, payload) => {
        state.api.fetch.inProgress = false;
        state.api.fetch.completed = true;
        state.api.fetch.success = true;
        state.api.fetch.error = false;
        state.api.data = payload
    },
    'SET_API_DATA_FETCH_ERROR': (state, payload) => {
        state.api.fetch.inProgress = false;
        state.api.fetch.completed = true;
        state.api.fetch.success = false;
        state.api.fetch.error = true;
        state.api.data = payload
    },

    loginRequest(state, user) {
        state.status = {submitted: true, loggingIn: true};
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = {submitted: false, loggedIn: true};
        state.user = user;
    },
    loginFailure(error) {
        state.status = {
            submitted: false,
            loggedIn: false,
            message: '¡Ups!'
        };
        state.user = null;
    },
    logout(state) {
        state.status = {submitted: false};
        state.user = null;
    },
    formResponse(state, payload) {
        state.api.data = payload
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations,
    getter
};
