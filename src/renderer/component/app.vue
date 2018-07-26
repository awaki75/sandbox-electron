<template>
  <div>
    <p>Hello, world.</p>
    <button @click="add">Add</button>
    <p>counter: {{ counter }}</p>
    <input v-model="message">
    <p>message: "{{ message }}"</p>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
