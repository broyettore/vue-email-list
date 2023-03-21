'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            isShow: false,
            emails: [],
        }
    },

    methods: {
        showToggle() {
            this.isShow = !this.isShow
        },
    },

    beforeCreate() {

        for (let i = 1; i <= 10; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
    
                    const result = response.data.response
                    this.emails.push(result)
            })
        }
    }

}).mount("#app")