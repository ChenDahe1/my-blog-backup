<template>
  <div>
    <h1>Contact Me</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Message">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>
    <div class="messages">
      <h2>Messages</h2>
      <div v-for="message in messages" :key="message.id" class="message">
        <p><strong>{{ message.name }}</strong> ({{ message.email }})</p>
        <p>{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      messages: []  // 存储所有留言
    };
  },
  methods: {
    submitForm() {
      const newMessage = {
        id: Date.now(),
        name: this.form.name,
        email: this.form.email,
        content: this.form.message
      };
      this.messages.push(newMessage);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.messages {
  margin-top: 20px;
}

.message {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
