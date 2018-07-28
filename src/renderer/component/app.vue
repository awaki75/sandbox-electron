<template>
  <div class="section">
    <div class="container">
      <p>Hello, world.</p>
      <button class="button" @click="add">Add</button>
      <p>counter: {{ counter }}</p>
      <input class="input" v-model="message">
      <p>message: "{{ message }}"</p>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
