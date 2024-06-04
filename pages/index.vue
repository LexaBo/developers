<template>
  <div class="main-page">
    <div class="main-page__columns">
      <div class="main-page__column">
        <Filters/>
      </div>
      <div class="main-page__column">
        <ProductsGrid/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainPage',
})
</script>

<style scoped lang="scss">
  @import "~/assets/pages/main-page/main-page";
</style>
