import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/Form'
import Template from '@/components/Template'
import Basic from '@/components/Basic'
import HighCharts from '@/components/HighCharts'
import DataTable from '@/components/DataTable'
import JqueryUI from '@/components/JqueryUI'
import HttpProxy from '@/components/HttpProxy'
import LoginPage from '@/components/login/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/highcharts',
      name: 'HighCharts',
      component: HighCharts
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/jqueryui',
      name: 'JqueryUI',
      component: JqueryUI
    },
    {
      path: '/httpproxy',
      name: 'HttpProxy',
      component: HttpProxy
    }
  ]
})
