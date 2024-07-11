<template>
    <div>
      <el-header class="header">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/about">About Me</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/contact">Contact Me</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/login">Login</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="/register">Register</router-link></el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main-content">
        <router-view></router-view>
      </el-main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key;
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #409eff;
    color: #fff;
  }
  
  .el-menu-demo {
    background-color: #409eff;
    color: #fff;
    border-bottom: none;
  }
  
  .el-menu-demo .el-menu-item {
    padding: 0 20px;
  }
  
  .el-menu-demo .el-menu-item a {
    color: #fff;
  }
  
  .main-content {
    padding: 20px;
    background-color: #fff;
  }
  </style>
  