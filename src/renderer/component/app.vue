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

<style lang="scss">
$family-sans-serif: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic, 'ヒラギノ角ゴ ProN W3',
  Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo, sans-serif;
@import '~bulma';
</style>
