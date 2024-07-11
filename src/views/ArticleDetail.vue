<template>
    <div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
    </div>
  </template>
  
  <script>
  import articleApi from '@/api/article';
  
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        article: {}
      };
    },
    created() {
      this.fetchArticle();
    },
    methods: {
      async fetchArticle() {
        try {
          const response = await articleApi.getArticle(this.$route.params.id);
          this.article = response.data;
        } catch (error) {
          console.error('Error fetching article:', error);
        }
      }
    }
  };
  </script>
  