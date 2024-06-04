<template>
  <div class="products-grid">
    <template v-if="isLoaded">
      <ul class="products-grid__list">
        <li
            v-for="product in products"
            :key="product.id"
            class="products-grid-item"
        >
          <NuxtLink :to="`/product/${product.id}`" class="products-grid-item__link">
            <div class="products-grid-item__image-container">
              <img
                  class="products-grid-item__image"
                  :src="product.images[0]"
                  alt="character"
              />
            </div>
            <h3 class="products-grid-item__name">{{ product.title.ru }}</h3>
          </NuxtLink>
        </li>
      </ul>
      <v-pagination
          v-model=activePage
          :pages="totalPage"
          :range-size="1"
          :hideFirstButton="true"
          :hideLastButton="true"
          @update:modelValue="onUpdatePage"
      />
    </template>
    <Loader v-else-if="isLoading"/>
    <h5 v-else
        class="products-grid__nothing-found">
      Ничего не найдено
    </h5>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useProductsGridStore} from "~/stores/ProductsGridStore";
import {useFilterStore} from "~/stores/FilterStore";
import VPagination from "@hennge/vue3-pagination";

export default defineComponent({
  name: 'ProductsGrid',
  components: {
    VPagination
  },
  setup() {
    const productsGridStore = useProductsGridStore();
    const {activePageNumber, totalPage, products} = toRefs(productsGridStore);
    const {filtersType} = toRefs(useFilterStore());
    const isLoading = computed(() => productsGridStore.productsLoadingStatus === 'loading');
    const isLoaded = computed(() => productsGridStore.productsLoadingStatus === 'loaded');
    const activePage = activePageNumber;

    const onUpdatePage = () => {
      productsGridStore.setProductsActivePage(unref(activePage));
    }

    watch([filtersType, activePage], () => {
      productsGridStore.fetchProducts();
    }, {immediate: true})

    return {
      productsGridStore,
      isLoading,
      isLoaded,
      activePage,
      totalPage,
      onUpdatePage,
      products,
    }
  }
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/products-grid/products-grid";
</style>
