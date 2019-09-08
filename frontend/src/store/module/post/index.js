import post, {ADD_POST, FETCH_POSTS, GET_POSTS, IS_LOADED} from './post';

export const PostNamespace = 'post';

export const PostGetterTypes = {
    IS_LOADED: `${PostNamespace}/${IS_LOADED}`,
    GET_POSTS: `${PostNamespace}/${GET_POSTS}`,
};

export const PostMutationTypes = {};

export const PostActionTypes = {
    FETCH_POSTS: `${PostNamespace}/${FETCH_POSTS}`,
    ADD_POST: `${PostNamespace}/${ADD_POST}`,
};

export default post;