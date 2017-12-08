<template>
  <div>
    <div class="hello">
      <h1>{{ name }}</h1>
    </div>
    <div class="toggle">
      <h3 class="toggle__label">How to toggle:</h3>
      <div class="toggle__value">
        Description: {{ description }}<br>
        Task: {{ meeting }}<br>
        Project: {{ project }}
      </div>
      <a v-bind:href="url">
        <button>
          Take me to the meeting
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Meeting',
  data () {
    return {
      type: '',
      name: '',
      description: '',
      task: '',
      project: '',
      url: ''
    }
  },
  mounted () {
    axios.get(`https://5rbjwsk1a7.execute-api.us-east-1.amazonaws.com/dev/get/${this.$route.params.id}`)
      .then(result => {
        this.type = result.data.type
        this.url = result.data.url
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    description: function () {
      return ''
      // switch(this.type) {
      //   case 'android':
      //   case 'elixir':
      //   case 'ember':
      //   case 'frontend':
      //   case 'ios':
      //   case 'nodejs':
      //   case 'react':
      //   case 'react-native':
      //   case 'ror':
      // }
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  .toggle__value {
    margin: 15px auto;
    background: #dcdcdc;
    padding: 10px 0;
    max-width: 400px;
  }

  button {
    margin-top: 30px;
    padding: 15px 25px;
    background: #e74c3c;
    color: white;
    font-size: 1rem;
    border: none;
  }
  
</style>
