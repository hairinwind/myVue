<template>
  <b-nav is-nav-bar class="ml-auto">
    <b-nav-item-dropdown :text="welcomeText()" class="nav-link">
      <b-dropdown-item href="#">User Profile</b-dropdown-item>
      <b-dropdown-item @click='logout'>Logout</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<<script>
export default {
  name: 'loginedMenuItem', 
  methods : {
    welcomeText() {
      return "Welcome " + this.$store.state.user
    }, 
    logout() {
      this.$store.commit('LOGOUT')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
