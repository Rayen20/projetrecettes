import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
         APP_ID :"5bc91d77",
        APP_KEY : "131f5e5e59a9fa14117b1d6410957dbe",
        apiUrl: 'https://api.edamam.com/search',
        url:'https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}',
        
        
        results: [],
        show: false,
        alert : "",
        query:""
     
      
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
       
        setShow(state, sh){
            state.show = sh
        },
        setQuery(state, q){
            state.query = q
        },
        
    },
    actions: {
        async getData({ state, commit }) {
            if (this.state.query !== "") {
              const result = await axios.get(state.url);
              if (!result.data.more) {
                //return setAlert("No food with such name");
                commit('setAlert', "No food with such name");
              }
              
              console.log(result);
              commit('setRecipes', result.data.hits);
              commit('setQuery', "");
              commit('setAlert', "");
              
            } else {
                commit('setAlert', "Please fill the form");
             
            }
          },
       
       
    
         
        

    },
   
});
