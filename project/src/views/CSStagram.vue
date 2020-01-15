<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Bonjour, je suis la page {{ pageName }} </p>
    
    <div class="container">
        <div v-for="post in posts" :key="post.id" class="post">
            <h2> {{ post.titre }} </h2>
            <img :src="post.url" :alt="post.alt">
          <div  class="likes">
          <img :src="post.heart" alt="Coeur" @click.once="liker(post.id)" />
          <p v-if="post.likes <= 100">{{ post.likes }}</p>
          <p v-else>+ de 100 personnes</p>
        </div>
        </div>
    </div>
    <!-- <p v-if="Test">A vendre</p> -->
    <!-- <input type="text" name="jeanmichel" id="jeanmichel" v-model="input">
    <h1>{{ input }}</h1> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios.get("http://api.lucasvandenberg.fr/v1/post?page=1", {
        headers: {
          "Content-type": "application/json",
          "Accept": "appliaction/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => (this.posts = response.data.data));
  },
  data: function() {
        return{
            posts: null,
            pageName : "CSStagram",
            url : "https://images.unsplash.com/photo-1544144414-ac819b0ca347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
            alt : "oui",
            // nombre1 : 1,
            // nombre2 : 2,
            // input : ""
            
        }
    },
    methods: {
    liker: function(id) {
      return this.posts[id].heart = "https://image.flaticon.com/icons/png/512/148/148836.png",
      this.posts[id].likes++
    },
        // testLogique: function(){
        //     if(this.nombre1 < this.nombre2){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
    },
  name: "csstagram",
};
</script>


<style lang="scss" scoped>
 img {
    max-width: 300px;
}
.likes {
  display: flex;
  justify-content: center;
  align-items: center;
}

.likes img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>

