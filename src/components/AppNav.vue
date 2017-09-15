<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#"><img src="../assets/logo.png" alt="logo" width="10%"></b-navbar-brand>
       <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item>
            <router-link to="/basic" class="nav-link" active-class="active">
              Basic
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/template" class="nav-link" active-class="active">
              Template
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/form" class="nav-link" active-class="active">
              Form
            </router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="other JS lib" class="nav-link">
            <b-dropdown-item href="#">
              <router-link to="/datatable" active-class="active">DataTable</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/highcharts" active-class="active">HighCharts</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/jqueryui" active-class="active">Jquery UI</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
        <login-menu-item />
       </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import LoginMenuItem from './login/LoginMenuItem.vue'

export default {
  name: 'appNav', 
  components: {LoginMenuItem}
}
</script>