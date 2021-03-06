import axios from 'axios';
import config from "../../../config/config";
import ConfigManager from "seng-config";
import {getValue, setValue} from '../../../util/injector';
import {CONFIG_MANAGER} from '../../../data/Injectables';


export const FETCH_POSTS = 'fetchPosts';
export const GET_POSTS = 'getPosts';
export const IS_LOADED = 'isLoaded';
export const ADD_POSTS = 'addPosts';
export const ADD_POST = 'addPost';
export const ADD_NEW  = 'addNew';


const setupInjects = () => {
    const configManager = new ConfigManager();
    configManager.init(config.config, config.environment);

    setValue(CONFIG_MANAGER, configManager);
};

setupInjects();

const configManager = getValue(CONFIG_MANAGER);
const apiURL = configManager.getURL('api');


export default {
    namespaced: true,
    state: {
        posts: [],
        isLoaded: false,
    },
    getters: {
        [IS_LOADED]: state => state.isLoaded,
        [GET_POSTS]: state => state.posts
    },
    mutations: {
        [ADD_POSTS]: (state, payload) => {
            state.posts =  payload;
        },
        [ADD_NEW]: (state, payload) => {
            state.posts =  [...state.posts, payload.data];
        },
        [IS_LOADED]: (state, data) => {
            state.isLoaded = data;
        },
    },
    actions: {
        [FETCH_POSTS]: ({commit}) => {
            axios
                .get(apiURL + 'posts')
                .then(response => {
                    if (response.status === 200) {
                        commit(ADD_POSTS, response.data);
                        commit(IS_LOADED, 1);
                    }
                });

        },
        [ADD_POST]: ({commit, dispatch}, payload) => {
            commit(ADD_NEW, payload);
        }
    },
};
