'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            // will add here
        }
    },
    methods: {
        showToggle() {
            this.isShow = !this.isShow
        },

    }
}).mount("#app")