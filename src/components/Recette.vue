<template>

 
   <div  class="app">
    <h1>Food Searching App</h1>
      <div class="search-form">
      <input type="text" name="query" v-model="query" placeholder="query" class="search-form" />
        
        <button type="button" v-on:click="onSubmit(query)">Search</button>
      </div>
       <h2> hello </h2>
       <br>
       <v-layout row wrap>
          <v-card data-cy="recipeEntry">
         <button type="button" v-on:click="freeA(query)" class="btn">Free Alcool</button>

          </v-card>
        </v-layout>
   <br><br>
        <v-layout row wrap>
          <v-card data-cy="recipeEntryy">
         
  <button type="button" v-on:click="freeG(query)" >Free Gluten</button>
          </v-card>
        </v-layout>
        <br>
     
      <v-container grid-list-lg  >
        
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in recipes" :key="idx">
                <v-card data-cy="recipeEntry" >
                    <v-responsive>
                        <v-img :src="item.recipe.image"></v-img>
                    </v-responsive>

                    <v-card-text>
                        <div class="title my-5">{{ item.recipe.label }}</div>

                        
                    </v-card-text>

                    <v-card-actions class="popup">
                        <v-btn color="green" id="myBtn" @click="myFunction" dark 
                            >Show</v-btn
                        >
      
                        <div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="closeFunction">&times;</span>
     <v-card-text>
                        <div class="title my-5">{{ item.recipe.label }}</div>

                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li
                                v-for="(ingredient, i) in item.recipe
                                    .ingredientLines"
                                :key="i"
                            >
                                {{ ingredient }}
                            </li>
                        </ul>
                    </v-card-text>
  </div>

</div>

                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  
   </div>



</template>



<script>


//import Recipe from "./Recipe";
//import Alert from "./Alert";




export default {
  
  name: "Recette",
  
  components: {
   // Recipe  
   // Alert ,
   // Recipe

   
    
    },
  
    computed: {
      recipes() {
            return this.$store.state.recipes;
        },
        alert() {
            return this.$store.state.alert;
        }
    },
    mounted() {
      this.onSubmit()
    },
    methods:
    { data() {
      return {
      
        id: null ,
      results :[],
       APP_ID :"5bc91d77",
      APP_KEY : "131f5e5e59a9fa14117b1d6410957dbe",
       //url:'https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}',
         valid: false,
         query:"",
        
      }
    },
  
     myFunction() {
 var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 

  modal.style.display = "block";


},
closeFunction() {
 var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 

  modal.style.display = "none";


},
   /* showRecipes() {
            this.$store.dispatch('getRecipes');
          
        },*/
   /* changeval(plan) {
            this.setQuery(plan)
        },*/
     /*   show(){
       axios.get(this.url).then(response => {
            this.results = response.data
          })},*/
     onSubmit(query) {
      
    //  e.preventDefault();
   
    if (query != "") {
                this.$store.dispatch('getRecipes',query);
                this.$store.dispatch('changequery',query);
             // this.$router.push({ name: 'menu' });
            // this.valid = true;
             if (this.valid == true) {
            this.$router.push({ name: 'menu' });
            
            
            
             }
    }

                // window.location.href = `/menu`;
            
     },
      freeA(query) {
      
    //  e.preventDefault();
   
    if (query != "") {
                this.$store.dispatch('getNoalcool',query);
                this.$store.dispatch('changequery',query);
             // this.$router.push({ name: 'menu' });
            // this.valid = true;
           
    }
      },
   freeG(query) {
      
    //  e.preventDefault();
   
    if (query != "") {
                this.$store.dispatch('getNogluten',query);
                this.$store.dispatch('changequery',query);
             // this.$router.push({ name: 'menu' });
            // this.valid = true;
            if (this.valid == true) {
            this.$router.push({ name: 'menu' });
            
            
            
             }
             
    }
      }
    /*  onChange: function () {
      

 this.$store.dispatch('changequery',
 { query : this.query});

      
     },*/

   
   
    
    }
 
   
    
  
};
</script>


<style scoped>


.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700&display=swap");

* {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  outline: none;
}

html {
  font-size: 62.5%;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 8rem;
  letter-spacing: 0.1rem;
  font-style: italic;
  color: #40b48e;
  text-shadow: 0 0.2rem 5rem rgb(119, 115, 115);
  text-transform: uppercase;
  margin: 4rem 0;
}

.v-search-form {
  width: 60rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  border-radius: 0.5rem;
  margin-bottom: 5rem;
  box-shadow: 1rem 2rem 5rem #aaa;
  position: relative;
}

.alert {
  position: absolute;
  top: -3rem;
  left: 0;
  background-color: rgb(233, 72, 72);
  width: calc(100% - 0.4rem);
  border-radius: 0.5rem;
  padding: 0.2rem;
}

.alert h3 {
  font-size: 1.8rem;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
}

.search-form input {
  font-size: 1.6rem;
  border: none;
  border-bottom: 0.1rem solid #ccc;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  height: 3rem;
}

.search-form input[type="text"] {
  padding: 0 0.5rem;
  width: 60%;
  color: #555;
}
.btn{
   padding: 0 2rem;
   border: 0 2em;
}
.search-form input[type="submit"] {
  width: 25%;
  text-transform: uppercase;
  background-color: #40b48e;
  color: #fff;
}

.recipes {
  width: 90%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.recipe {
  width: 30rem;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  padding: 2rem;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 2rem 3rem 5rem #aaa;
}

.recipe h2 {
  background-color: rgba(161, 161, 161, 0.7);
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  right: 2.5rem;
  font-size: 2.5rem;
  font-weight: 400;
  text-shadow: 0 0.5rem 0.5rem #555;
  color: #fff;
}

.recipe img {
  border-radius: 0.5rem;
  object-fit: cover;
}

.recipe a {
  font-size: 1.8rem;
  color: #40b48e;
}

.recipe button {
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
  background-color: #40b48e;
  border: none;
  border-radius: 0.5rem;
  height: 3rem;
}

.ingredient-list {
  margin-top: 1rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.ingredient-list li {
  margin: 0.5rem 0;
}

.ingredient-text {
  font-size: 1.5rem;
  color: #888;
}

.ingredient-weight {
  color: #40b48e;
  font-size: 1.3rem;
}

</style>
