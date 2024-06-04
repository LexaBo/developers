<template>
  <div class="product-information">
    <div v-if="isLoaded" class="product-information__columns">
      <div class="product-information__column">
        <img class="product-information__image" :src="image" :alt="productInfo.name"/>
      </div>
      <div class="product-information__column">
        <h1 class="product-information__title">{{ productInfo.name }} ({{ productInfo.type }})</h1>
        <div class="product-information__description" v-html="productInfo.description" />
      </div>
    </div>
    <Loader v-else-if="isLoading"/>
    <h3 v-else>
      Something went wrong
    </h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useProductInfoStore} from "~/stores/ProductInfoStore";

export default defineComponent({
  name: 'ProductInformation',
  setup() {
    const route = useRoute();
    const routeParams = route.params;
    const id = routeParams.id;
    const productInfoStore = useProductInfoStore()
    const {image, productInfo} = toRefs(productInfoStore);
    const isLoading = computed(() => productInfoStore.productLoadingStatus === 'loading');
    const isLoaded = computed(() => productInfoStore.productLoadingStatus === 'loaded');

    productInfoStore.fetchProduct(id);

    return {
      isLoading,
      isLoaded,
      productInfoStore,
      image,
      productInfo
    }
  },
})
</script>

<style scoped lang="scss">
  @import "~/assets/pages/product-information/product-information";
</style>
