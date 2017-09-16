<template>
  <div>
      <ul>
          <li v-for='state in states'> {{state.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
      return {
          states: []
      }
  }, 
  mounted: function() { 
      this.$http.get('/service/state/USA/all', {})
        .then(response => {
            this.states = response.body.RestResponse.result
        }, response => {
            console.log("error");
            console.log(response)
      });
  }
}
</script>
