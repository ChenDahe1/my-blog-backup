<template>
    <div>
      <NavBar />
      <router-view />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    components: {
      NavBar
    }
  };
  </script>
  
  <style>
  /* 样式 */
  </style>
  