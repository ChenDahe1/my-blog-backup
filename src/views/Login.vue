<template>
  <div>
    <h1>Login</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/user'; // 确保路径正确

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await api.login(this.form);
        console.log('Login successful:', response);
        // 在这里处理登录成功的逻辑，例如保存token
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  }
};
</script>
