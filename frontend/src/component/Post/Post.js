import {mapActions, mapState} from "vuex";

export default {
    name: 'Post',
    props: ['data','admin'],
    data() {
        return {
            post: {},
            edit: false,
            postTitle: '',
            postBody: '',
            postId: null,
            isPublished: null,
        };
    },
    created() {
        this.getPost();
    },
    methods: {
        ...mapActions('account', ['editPost','deletePost']),
        getPost() {
            this.post = this.data;
            this.postTitle = this.data.title;
            this.postBody = this.data.body;
            this.isPublished = parseInt(this.data.is_published);
            this.postId = this.data.id;
        },
        postEdit(){
            this.edit = false;
            const {postId, postTitle, postBody, isPublished} = this;
            this.editPost({postId, postTitle, postBody, isPublished});
        },
        postDelete(){
            const {postId} = this;
            this.deletePost({postId});
            this.$emit('delete-row');
        }
    }
};
