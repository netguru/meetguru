<template>
  <div>
    <div v-if="created"v>
      <div>
        <div class="hello">
          <h1>Your meeting</h1>
        </div>
        <div class="toggle">
          <h3 class="toggle__label">Url to the meeting</h3>
          <div class="toggle__value" v-on:click="handleClick">
            {{ location }}meeting/{{ id }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="hello">
        <h1>Create a new meeting</h1>
      </div>
      <form
        id="new-meeting$"
        v-on:submit="submitMeeting"
      >
        <div class="meeting-type-container">
          <label for="meeting-type">Select a meeting type</label>
          <select id="meeting-type">
            <option value="android">Android meeting</option>
            <option value="ember">Ember meeting</option>
            <option value="elixir">Elixir meeting</option>
            <option value="frontend">Front-end meeting</option>
            <option value="ios">iOS meeting</option>
            <option value="nodejs">NodeJS meeting</option>
            <option value="react">React meeting</option>
            <option value="react-native">React Native meeting</option>
            <option value="ror">Ruby on Rails meeting</option>
            <option value="junior">Junior Bi-weekly meeting</option>
            <option value="qa">QA meeting</option>
            <option value="vue">Vue.JS meeting</option>
          </select>
        </div>
        <div class="url-container">
          <label for="url">Paste url to the meeting</label>
          <input id="url" type="url">
        </div>
       
        <button type="submit">Create a new meeting</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewMeeting',
  data () {
    return {
      created: false,
      id: '',
      url: '',
      location: window.location.href
    }
  },
  methods: {
    handleClick: function (e) {
      function selectElementContents (el) {
        var range = document.createRange()
        range.selectNodeContents(el)
        var sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      }
      selectElementContents(e.target)
    },
    submitMeeting: function (e) {
      e.preventDefault()
      axios
        .post('https://5rbjwsk1a7.execute-api.us-east-1.amazonaws.com/dev/create', {
          type: document.querySelector('#meeting-type').value,
          url: document.querySelector('#url').value
        })
        .then(result => {
          this.id = result.data.id
          this.url = result.data.url
          this.created = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  label {
    display: block;
  }

  .meeting-type-container {
    margin-bottom: 30px;
  }

  .url-container {
    margin-bottom: 30px;
  }

  button {
    padding: 15px 25px;
    background: #e74c3c;
    color: white;
    font-size: 1rem;
    border: none;
  }

  .toggle__value {
    margin: 15px auto;
    background: #dcdcdc;
    padding: 10px 0;
    max-width: 400px;
  }
</style>
