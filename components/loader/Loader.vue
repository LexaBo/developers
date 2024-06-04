<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      class="loader"
  >
    <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="#fc9003"
        stroke-dasharray="164.93361431346415 56.97787143782138"
        stroke-width="10"
    >
      <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
      ></animateTransform>
    </circle>
  </svg>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Loader',
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/loader/loader";
</style>
