<template>
  <logined-menu-item v-if="isUserLogin()"></logined-menu-item>
  <not-login-menu-item v-else></not-login-menu-item>
</template>

<script>
//auth: this.$store.state.auth,
import LoginedMenuItem from './LoginedMenuItem.vue'
import NotLoginMenuItem from './NotLoginMenuItem.vue'

export default {
  name: 'loginMenuItem',
  components: {LoginedMenuItem, NotLoginMenuItem},
  data () {
    return {
    }
  }, 
  methods: {
    isUserLogin() {
      return this.$store.state.auth
    }
  }
}
</script>