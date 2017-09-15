<template>
  <div>
      <panel>
          <div>computed properties</div>
          <div>text: <input v-model="text" placeholder="edit me"></div>
          <div>computed properties: "{{ reversedMessage }}"</div>
      </panel>
      <panel>
        <modal />
      </panel>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'basic',
  components: {Modal},
  data () {
    return {
      text: 'abc'
    }
  }, 
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.text.split('').reverse().join('')
    }
  }
}
</script>