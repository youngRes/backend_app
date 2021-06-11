import Vue from 'vue'
import Vuex from 'vuex'
import router  from './routes'
import axios from "axios";
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        userName: null,
        token: null,
        alert: false,
        selectedData: [],
        games: [],
        filter: [],
        filterStudent: [],
        filterH1: {},
        filterH2: {},
        availableFilters: null
    },
    mutations: {
        logout: state => {
            state.availableFilters = null;
            state.userName = null;
            localStorage.removeItem('token');
            router.push('/');
        },
        login: (state, payload) => {
            state.userName = payload.userName;

            axios.post("login", null, {
                headers: {
                    user: payload.user,
                    password: payload.password
                }
            }).then(res => {
                state.token = 'Bearer '+res.data.token;
                state.alert = false;
                axios.defaults.headers.common['Authorization'] = state.token;
                localStorage.setItem('token', state.token);
                
                const requestOne = axios.get('descriptions/games');
                const requestTwo = axios.get("filters/group");
                const requestThree = axios.get("filters/student");
                axios.all([requestOne, requestTwo, requestThree ]).then(axios.spread((...responses) => {
                    state.games = responses[0].data.games;
                    state.availableFilters = [responses[1].data, responses[2].data];
                    router.push('/main');
                })).catch(errors => {
                    state.userName = null;
                    state.alert = true;
                    console.log(errors);
                });
            }).catch(error => {
                state.userName = null;
                state.alert = true;
                console.log(error);
            });


        },
        updateSession: (state, payload) => {
            state.userName = payload.user;
            state.token = payload.token;
            axios.defaults.headers.common['Authorization'] = state.token;
        },
        changeFilter1: (state, filterH) => {
            state.filterH1 = filterH;
        },
        changeFilter2: (state, filterH) => {
            state.filterH2 = filterH;
        }
    },
    actions: {
        logout: ({commit}) => {
            commit('logout');
        },
        login: ({commit}, payload) => {
            commit('login', payload);
        },
        tryToLogin ({commit}) {
            const  token = localStorage.getItem('token');
            if(!token) {
                router.push('login');
                return
            }
            commit('updateSession', {user: 'Teacher', token: token});
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== null;
        }
    }
});
