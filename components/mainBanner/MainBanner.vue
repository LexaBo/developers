<template>
  <div class="main-banner">
    <img class="main-banner__img"
         src="/img/main-banner/banner-home.png"
         alt="home"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainBanner',
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/main-banner/main-banner";
</style>
