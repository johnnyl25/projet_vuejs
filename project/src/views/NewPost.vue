<template>
  <!-- Une template doit toujours n'avoir qu'une seule balise à la racine -->
  <div class="csstagram">
    <p>Bonjour, je suis la page {{ pageName }}</p>
    <div @click="NewPost" class="container">
        <form>
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <input type="submit" value="">
        </form>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
//   mounted() {
//     axios.get("http://api.lucasvandenberg.fr/v1/post", {
//       headers: {
//           "Access-Control-Allow-Origin": "*"
//         }
//       })
//       .then(response => (this.posts = response.data.data));
//   },
  data: function() {
    return {
      errorStatus: null,
      pageName: "New Post",
      urlImage: null,
      postTitle: null,
      description: null,
    };
  },
  methods: {
      newPost: function(e){
          e.preventDefault();
          axios.post("http://api.lucasvandenberg.fr/v1/post", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept" : "Application/json",
                "Content-type" : "Application/json",                 
              },
            url: this.urlImage,
            author_id: 12,
            title: this.postTitle,
            description: this.description,
            likes: 0
          })
      }
  },
  name: "newpost"
};
</script>

<style lang="scss" scoped>
body * {
  color: red;
}
img {
  max-width: 400px;
  height: auto;
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