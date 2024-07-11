<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="16">
        <!-- 文章列表 -->
        <div v-for="article in articles" :key="article.id" class="article">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ article.title }}</span>
              <span style="float: right">{{ article.date }}</span>
            </div>
            <div class="text item">{{ article.summary }}</div>
            <img :src="article.image" class="article-image"/>
            <div class="bottom clearfix">
              <el-button type="text" @click="readMore(article.id)">Read More</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <!-- 侧边栏 -->
        <el-card>
          <h3>About Me</h3>
          <p>Hello! I'm a web developer passionate about Vue.js and Element UI. This is my personal blog where I share articles about web development and other topics that interest me.</p>
          <img src="https://via.placeholder.com/150" alt="About Me" class="about-me-image"/>
        </el-card>
        <el-card class="sidebar-section">
          <h3>Recent Posts</h3>
          <ul>
            <li v-for="post in recentPosts" :key="post.id">{{ post.title }}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Introduction to Vue.js',
          date: '2023-07-01',
          summary: 'Vue.js is a progressive JavaScript framework for building user interfaces...',
          image: 'https://via.placeholder.com/600x400'
        },
        {
          id: 2,
          title: 'Getting Started with Element UI',
          date: '2023-07-02',
          summary: 'Element UI is a Vue 2.0 based component library for developers, designers and product managers...',
          image: 'https://via.placeholder.com/600x400'
        },
        {
          id: 3,
          title: 'Building a Blog with Vue and Element UI',
          date: '2023-07-03',
          summary: 'In this article, we will explore how to build a simple blog using Vue.js and Element UI...',
          image: 'https://via.placeholder.com/600x400'
        }
      ],
      recentPosts: [
        { id: 1, title: 'Introduction to Vue.js' },
        { id: 2, title: 'Getting Started with Element UI' },
        { id: 3, title: 'Building a Blog with Vue and Element UI' },
        { id: 4, title: 'Understanding Vue Router' },
        { id: 5, title: 'State Management with Vuex' }
      ]
    };
  },
  methods: {
    readMore(id) {
      this.$router.push({ name: 'ArticleDetail', params: { id } });
    }
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.article {
  margin-bottom: 20px;
}

.article-image {
  width: 100%;
  margin-top: 10px;
}

.about-me-image {
  width: 100%;
  margin-top: 10px;
}

.sidebar-section {
  margin-top: 20px;
}
</style>
