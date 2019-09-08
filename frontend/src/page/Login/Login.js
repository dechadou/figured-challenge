// @vue/component
import {mapState, mapActions} from "vuex";

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            submitted: false,
            account: this.$store.state['account']
        }
    },
    computed: {
        ...mapState('account', ['status']),
    },
    created() {
        // reset login status
        this.logout();
    },
    methods:{
        ...mapActions('account', ['login', 'logout']),
        handleSubmit(e) {
            this.submitted = true;
            const {username, password} = this;
            if (username && password) {
                this.login({username, password});
            }
        }
    }
};
