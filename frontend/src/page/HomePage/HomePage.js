// @vue/component
import {mapActions, mapGetters} from "vuex";
import {PostActionTypes, PostGetterTypes} from "../../store/module/post";

export default {
    name: 'HomePage',
    data(){
        return {
            loaded: false,
        }
    },
    computed: {
        ...mapGetters({
            posts: PostGetterTypes.GET_POSTS,
            isLoaded: PostGetterTypes.IS_LOADED,
        })
    },
    methods: {
        ...mapActions({
            fetchPosts: PostActionTypes.FETCH_POSTS
        }),
    },
    created() {
        this.fetchPosts();
    }
};
