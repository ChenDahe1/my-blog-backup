<template>
  <div>
    <h1>Register</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/user'; // 确保路径正确

export default {
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await api.register(this.form);
        console.log('Registration successful:', response);
        // 在这里处理注册成功的逻辑
      } catch (error) {
        console.error('Error registering:', error);
      }
    }
  }
};
</script>
