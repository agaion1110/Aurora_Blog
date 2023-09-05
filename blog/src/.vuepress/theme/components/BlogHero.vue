<template>
  <div class="bgImage">
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue'
defineComponent({
  name: 'BlogHero'
})
</script>

<style scoped>
.bgImage{
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: url("/blog.png") 98% 100% no-repeat;
  background-size: cover;
}
</style>