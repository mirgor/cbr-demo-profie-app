import Vue from 'vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './main.module.scss'

const apiServer = '';

const app = new Vue({
    el: '#app',
    components: {
    },
    data: {
        loading: false,
        user: null,
        levels: {
            '0': {
                name: 'Zero',
                maxRating: 100
            },
            '1': {
                name: 'One',
                maxRating: 1000
            },
            '2': {
                name: 'Master',
                maxRating: 5000
            }
        },
    },
    watch: {},
    mounted: function () {
        this.loading = true;
        // console.log('user', (window.parent || {}).baAuthUser);

        if(localStorage.getItem('jwtToken')) {
            axios.defaults.headers.common['Authorization'] =
                'Bearer ' + localStorage.getItem('jwtToken');
        }

        axios
            .get(`${apiServer}/api/v2/profile`)
            .then(function (response) {
                app.user = response.data.data;
                app.user.level = app.levels[app.user.user_field2] || {};
                const lvlNames = Object.keys(app.levels);
                let fl = false;
                for (const lvlName of lvlNames) {
                    if (fl) {
                        app.user.nextLevel = app.levels[lvlName];
                        fl = false;
                    }
                    if (lvlName == app.user.user_field2) {
                        fl = true;
                    }
                }
                app.user.nextLevel = null;
                app.loading = false;
            });
    },
    methods: {
    }
});
