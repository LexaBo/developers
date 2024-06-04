<template>
  <div id="error-page" class="page-not-found">
    <BackHome />
    <MainBanner/>
    <h1 class="page-not-found__title">Oops!</h1>
    <p class="page-not-found__text">Page not found</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'errorPage',
})
</script>

<style scoped lang="scss">
  @import "~/assets/pages/page-not-found/page-not-found";
</style>