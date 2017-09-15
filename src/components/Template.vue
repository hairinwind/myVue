<template>
  <div>
    <b-alert show>{{ msg }}</b-alert>
    <div class="card mt-2">
        <div v-html="rawHtml">{{ rawHtml }}</div>
        <div>{{ escapeHtml }}</div>
    </div>
    <div class="card mt-2">
        <span>Pass value to child template</span>
        <ul>
            <li v-for="item in items"><child-template :value="item"></child-template></li>
        </ul>
    </div>
  </div>
</template>

<script>
import ChildTemplate from './ChildTemplate.vue'

export default {
  name: 'template',
  components: {ChildTemplate},
  data () {
    return {
      msg: 'this page is practising vue template',
      rawHtml: '<span class="text-warning">text in rawHtml</span>',
      escapeHtml: '<span class="text-warning">raw html</span>',
      items: [123, 345, 456]
    }
  }
}
</script>