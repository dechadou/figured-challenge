// @vue/component
import {mapActions, mapGetters, mapState} from "vuex";
import {PostActionTypes, PostGetterTypes} from "../../store/module/post";

export default {
    name: 'Admin',
    data() {
        return {
            loaded: false,
            postTitle: '',
            postBody: '',
            isPublished: 1,
            create: false,
        }
    },
    computed: {
        ...mapState('account', ['formResponse']),
        ...mapGetters({
            posts: PostGetterTypes.GET_POSTS,
            isLoaded: PostGetterTypes.IS_LOADED,
        })
    },
    methods: {
        ...mapActions({
            fetchPosts: PostActionTypes.FETCH_POSTS,
            addPost: PostActionTypes.ADD_POST
        }),
        ...mapActions('account', ['createPost']),
        removeRow: function (index) {
            this.posts.data.splice(index, 1);
        },
        postCreate() {
            const vm = this;
            const {postTitle, postBody, isPublished} = this;
            this.createPost({postTitle, postBody, isPublished}).then(() => {
                //let newPost = vm.$store.state.account.api.data;
                //TODO: add row
                this.fetchPosts();
                this.create = false;
            });
        }
    },
    created() {
        this.fetchPosts();
    }
};
