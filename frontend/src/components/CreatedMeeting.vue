<template>
  <div>
    <div class="hello">
      <h1>Your meeting</h1>
    </div>
    <div class="toggle">
      <h3 class="toggle__label">Url to the meeting</h3>
      <div class="toggle__value">
        http://google.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatedMeeting'
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
