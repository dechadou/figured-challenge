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
            isPublished: 0,
            create: false,
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
        ...mapActions('account', ['createPost']),
        removeRow: function (index) {
            this.posts.data.splice(index, 1);
        },
        postCreate() {
            const {postTitle, postBody, isPublished} = this;
            this.createPost({postTitle, postBody, isPublished}).then(response => {
                //this.posts.data.push({title:postTitle})
                this.create = false;
            });
        }
    },
    created() {
        this.fetchPosts();
    }
};
