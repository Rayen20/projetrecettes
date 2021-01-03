<template>
   <div  class="app">
    <h1>Food Searching App</h1>
      <div class="search-form">
      <input type="text" name="query" placeholder="query" class="search-form" />
        
        <button type="button" >Search</button>
      </div>
       <h2> hello </h2>
       <br>
   </div>
</template>
<script>
export default {
   name: "HelloWorld",
  
  components: {
  
}
}
</script>
<style scoped>

.search-form {
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
</style>

