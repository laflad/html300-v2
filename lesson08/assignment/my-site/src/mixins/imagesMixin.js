export default {
    data() {
        return {
            toggle: false
        }
    },

    methods: {
        // Toggle a show state, used for the image border
        toggleShow() {
            this.toggle = !this.toggle;
        }
    }
}