<template>
  <div class="default">
    <MainBanner/>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'default',
  })
</script>
