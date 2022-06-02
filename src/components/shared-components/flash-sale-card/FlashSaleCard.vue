<template>
  <div
    class="flash-sale"
    :style="{ backgroundImage: 'url(' + item.image + ')' }"
  >
    <div class="flash-sale-content">
      <div class="flash-meta">
        <div class="tagline mb-3">
          {{ tagline }}
        </div>
        <h2>{{ item.name }}</h2>
        <div class="flash-item-pric my-3">
          {{ item.price }}
        </div>
        <div class="colors mb-4">
          <div class="tagline mb-2">Available Color</div>
          <span
            class="color-palette"
            v-for="color in item.colors"
            :key="color"
            :style="{ background: color }"
          >
          </span>
        </div>
        <div class="sizes mb-4">
          <div class="tagline mb-2">Available Sizes</div>
          <span class="sizes-palette" v-for="size in item.sizes" :key="size"
            >{{ size }}
          </span>
        </div>
      </div>
      <div class="action">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashSaleCard",
  props: {
    item: Object,
    tagline: String,
  },
};
</script>

<style lang="scss" scoped></style>
