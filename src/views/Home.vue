<template>
  <div class="home">
    <p class="text-xl">Top Headlines</p>
    <div class="flex flex-wrap justify-center items-center">
      <!-- BEGIN -->

      <div
        class="w-full max-w-sm m-4"
        v-for="(article, index) in topHeadlines"
        :key="index"
        v-show="isLoaded"
      >
        <div
          class="h-48 flex-none bg-cover rounded-b-none rounded text-center overflow-hidden"
          :style="`background-image: url('${article.urlToImage}')`"
          title="Woman holding a mug"
        ></div>
        <div
          class="border-r border-b border-l border-gray-400 bg-white rounded-b lg:rounded-t-none rounded p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{{article.title}}</div>
            <p class="text-gray-700 text-base">{{article.description}}</p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{{article.source.name}}</p>
              <p class="text-gray-600">{{article.publishedAt}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- END -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoaded: false,
      topHeadlines: [],
    };
  },
  methods: {},
  created() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=4d20ffa98f524a59b78898e64de3393f"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        this.topHeadlines = data.articles;
        this.isLoaded = true;
      });
  },
};
</script>
