<template>
  <form
      @submit.prevent="onSubmitFilters"
      class="filters"
  >
    <label class="filters__label" for="productsType">Тип</label>
    <select
        v-model="productsType"
        class="filters__field"
        id="productsType"
        name="status">
      <option value="">все</option>
      <option value="villa">виллы</option>
      <option value="condo">кондо</option>
    </select>
    <button class="filters__btn" type="submit">Поиск</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useFilterStore} from "~/stores/FilterStore";

export default defineComponent({
  name: 'Filters',
  setup() {
    const {setFilter, filtersType} = useFilterStore();
    const productsType = ref(unref(filtersType));

    const onSubmitFilters = (): void => {
      setFilter(unref(productsType));
    }

    return {
      productsType,
      onSubmitFilters,
    }
  },
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/filters/filters";
</style>
