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

<style lang="scss">
$family-sans-serif: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic, 'ヒラギノ角ゴ ProN W3',
  Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo, sans-serif;
@import '~bulma';
</style>
