<template>
  <div class="home">
    <h1 @click="getNews">This is the home Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    getNews() {
      fetch(
        "http://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=4d20ffa98f524a59b78898e64de3393f"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.articles);
        });
    },
  },
  computed: mapState(["articles"]),
};
</script>
