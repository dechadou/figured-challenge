import config from '../config/config';
import {authHeader} from '../_helpers';
import ConfigManager from 'seng-config';
import {getValue, setValue} from '../util/injector';
import {CONFIG_MANAGER} from '../data/Injectables';

export const userService = {
    login,
    logout,
    createPost,
    editPost,
    deletePost,
};

const setupInjects = () => {
    const configManager = new ConfigManager();
    configManager.init(config.config, config.environment);

    setValue(CONFIG_MANAGER, configManager);
};

setupInjects();
const configManager = getValue(CONFIG_MANAGER);
const apiURL = configManager.getURL('api');


function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
    };

    return fetch(apiURL + 'login', requestOptions)
        .then(handleResponse)
        .then(response => {
            // login successful if there's a jwt token in the response
            if (response.token) {
                localStorage.setItem('accessToken', response.token);
            }
        });
}

function createPost(postTitle, postBody, isPublished) {
    const requestOptions = {
        method: 'POST',
        headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'application/json'},
        body: JSON.stringify({title: postTitle, body: postBody, is_published: isPublished}),
    };

    let referenceUrl = apiURL + 'posts';

    return fetch(referenceUrl, requestOptions)
        .then(handleResponse)
        .then(response => {
                return response;
            }
        ).catch(response => {
            console.log(response);
        });
}

function deletePost(postId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'application/json'},
    };

    let referenceUrl = apiURL + 'posts/' + postId;

    return fetch(referenceUrl, requestOptions)
        .then(handleResponse)
        .then(response => {
                return response;
            }
        ).catch(response => {
            console.log(response);
        });
}

function editPost(postId, postTitle, postBody, isPublished) {
    const requestOptions = {
        method: 'POST',
        headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'application/json'},
        body: JSON.stringify({title: postTitle, body: postBody, is_published: isPublished, _method: 'PUT'}),
    };

    let referenceUrl = apiURL + 'posts/' + postId;

    return fetch(referenceUrl, requestOptions)
        .then(handleResponse)
        .then(response => {
                return response;
            }
        ).catch(response => {
            console.log(response);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
