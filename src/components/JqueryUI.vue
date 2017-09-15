<template>
    <panel>
        <p>Date: <input type="text" id="datepicker" v-model="date"></p>
        Date Selected: {{ date }}
    </panel>
</template>

<script>
import 'jquery-ui'

export default {
  data() {
      return {
          date: ''
      } 
  },
  mounted: function() {
      $( "#datepicker" ).datepicker({
                onSelect: (val) => {
                    this.date = val;
                }
        });
  }
}
</script>
