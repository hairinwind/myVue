<template>
  <div>
    <b-alert show variant="danger" v-if='error'>{{error}}</b-alert>
    <b-form @submit.prevent="login">
      <b-form-group
        id="fieldset1"
        label="username">
          <b-form-input id="username" v-model.trim="name" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset2"
        label="password">
          <b-form-input type="password" id="password" v-model.trim="password" required></b-form-input>
      </b-form-group>
      <b-button variant="primary" type="submit">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      name: '',
      password: '',
      error: ''
    }
  }, 
  methods: {
    login() {
      if (this.name === 'test' && this.password === 'test') {
        this.$store.commit('LOGIN', this.name)
        this.error = ''
        this.$router.push({ name: 'Hello' })
      } else {
        this.error = 'wrong username or password'
      }
    }
  }
}
</script>
